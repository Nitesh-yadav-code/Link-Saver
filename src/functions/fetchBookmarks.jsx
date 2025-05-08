async function fetchBookmarks() {
    try {
      const uid = localStorage.getItem("uid");
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        `https://sowarsqijwbbmvnfcpvj.supabase.co/rest/v1/bookmarks?user_id=eq.${uid}`,
        {
          method: "GET",
          headers: {
            Authorization: `${accessToken}`,
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvd2Fyc3FpandiYm12bmZjcHZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1OTIwNjUsImV4cCI6MjA2MjE2ODA2NX0.L2fTXqNpYW4uCDklHKpBMOO9QyIFSWOS_l0uAjPe1SU",
                'Prefer': 'return=representation',
            
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Error fetching notes:", err.message);
      throw err;
    }
  }
  
  export default fetchBookmarks;
  
  
  