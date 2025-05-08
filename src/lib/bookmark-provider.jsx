
import { createContext, useContext, useState, useEffect } from "react"
import fetchBookmarks from "../functions/fetchBookmarks"

const BookmarkContext = createContext(undefined)

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([])
  const user = JSON.parse(localStorage.getItem("user")) || null

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    if (user) {
     const loadBookmarks = async() =>{
      const storedBookmarks = await fetchBookmarks();
      if (storedBookmarks) {
        setBookmarks(storedBookmarks)
      } 
      
     } 
     loadBookmarks();
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    if (user && bookmarks.length > 0) {
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const addBookmark =  async(bookmark) => {
    const bookmarkToPost = {
      title: bookmark.title, 
      url: bookmark.url,
      summary: bookmark.summary,
      tags: bookmark.tags,
      favorite: bookmark.favorite,
      created_at: bookmark.createdAt,
      user_id: bookmark.user_id,
      favicon: bookmark.favicon,
    };
    
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch('https://sowarsqijwbbmvnfcpvj.supabase.co/rest/v1/bookmarks', {
        method: 'POST',
        headers: {
          'Authorization': `${accessToken}`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvd2Fyc3FpandiYm12bmZjcHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTIwNjUsImV4cCI6MjA2MjE2ODA2NX0.L2fTXqNpYW4uCDklHKpBMOO9QyIFSWOS_l0uAjPe1SU',
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
        body: JSON.stringify(bookmarkToPost),
      });


      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        return;
      }
      const result = await response.json();
      setBookmarks((prev) =>[...prev, result[0]])
      return result[0];
    } catch (error) {
      console.error('Error posting data:', error);
    }

    const newBookmark = {
      ...bookmark,
      // id: "bookmark-" + Math.random().toString(36).substring(2, 9),
    }
    setBookmarks((prev) => [newBookmark, ...prev])
  }

  
 
  const removeBookmark = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
  
    try {
      const response = await fetch(`https://sowarsqijwbbmvnfcpvj.supabase.co/rest/v1/bookmarks?id=eq.${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': ` ${accessToken}`, 
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvd2Fyc3FpandiYm12bmZjcHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTIwNjUsImV4cCI6MjA2MjE2ODA2NX0.L2fTXqNpYW4uCDklHKpBMOO9QyIFSWOS_l0uAjPe1SU',
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        console.error('Error deleting bookmark:', response.status, response.statusText);
        return;
      }
  
      // Update local state to remove the bookmark
      setBookmarks((prev) => prev.filter((bookmark) => bookmark.id !== id));
    } catch (error) {
      console.error('Error deleting bookmark:', error);
    }
  };

  const updateBookmark = (updatedBookmark) => {
    setBookmarks((prev) => prev.map((bookmark) => (bookmark.id === updatedBookmark.id ? updatedBookmark : bookmark)))
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, updateBookmark }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarkContext)
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider")
  }
  return context
}
