
import { useState } from "react"
import { useBookmarks } from "../../lib/bookmark-provider"
import AddBookmarkForm from "./add-bookmark-form"
import BookmarkTabs from "./bookmark-tabs"
import BookmarkSearch from "./bookmark-search"
import BookmarkList from "./bookmark-list"

export default function DashboardContent() {
  const { bookmarks } = useBookmarks()
  const [activeTab, setActiveTab] = useState("all")
  const [view, setView] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState([])

  // Get all unique tags from bookmarks
  const allTags = Array.from(new Set(bookmarks.flatMap((bookmark) => bookmark.tags).filter(Boolean)))

  // Filter bookmarks based on search term, selected tags, and active tab
  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch =
  (bookmark.title?.toLowerCase().includes(searchTerm.toLowerCase()) || "") ||
  (bookmark.url?.toLowerCase().includes(searchTerm.toLowerCase()) || "") ||
  (bookmark.summary?.toLowerCase().includes(searchTerm.toLowerCase()) || "");

    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => bookmark.tags.includes(tag))

    // Filter by tab
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "recent" && new Date(bookmark.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) ||
      (activeTab === "favorites" && bookmark.favorite)

    return matchesSearch && matchesTags && matchesTab
  })

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedTags([])
  }

  return (
    <div className="space-y-8 w-full max-w-[90%] mx-auto">
      <AddBookmarkForm />

      <div className="space-y-4 ">
        <BookmarkTabs activeTab={activeTab} setActiveTab={setActiveTab} view={view} setView={setView}/>

        <BookmarkSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        allTags={allTags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
        />


        <BookmarkList
        bookmarks={filteredBookmarks}
        view={view}
        searchTerm={searchTerm}
        selectedTags={selectedTags}
        clearFilters={clearFilters}
        
        />
      </div>
    </div>
  )
}
