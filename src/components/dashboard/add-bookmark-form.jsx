
import { useState } from "react"
import { useBookmarks } from "../../lib/bookmark-provider"
// import { showToast } from "@/lib/toast"
import { motion } from "framer-motion"
import { extractMetadata, generateSummary } from "../../lib/utils"

export default function AddBookmarkForm() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { addBookmark } = useBookmarks()
  const uid = localStorage.getItem("uid");

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!url) return

    // Basic URL validation
    try {
      new URL(url)
    } catch (error) {
    //   showToast("Invalid URL", "Please enter a valid URL including http:// or https://", "error")
      return
    }

    setIsLoading(true)

    try {
      // Extract metadata (title, favicon)
      const metadata = await extractMetadata(url)

      // Generate summary
      const summary = await generateSummary(url)

      // Add bookmark
     addBookmark({
        url,
        title: metadata.title || "Untitled",
        favicon: metadata.favicon || "",
        summary,
        tags: [],
        favorite: false,
        createdAt: new Date().toISOString(),
        user_id : uid,
      })


    //   showToast("Bookmark added", "Your bookmark has been saved successfully.", "success")

      setUrl("")
    } catch (error) {
    //   showToast("Failed to add bookmark", "There was an error processing your URL. Please try again.", "error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg border bg-slate-200 p-6 shadow-sm border-slate-100 dark:border-gray-700 dark:bg-gray-800"
    >
      <h2 className="mb-4 text-xl text-slate-700 dark:text-slate-100 font-bold">Add New Bookmark</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <input
          type="url"
          placeholder="Paste any URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          disabled={isLoading}
          required
        />
        <button
          type="submit"
          disabled={isLoading || !url}
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <svg
                className="mr-2 inline-block h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 inline-block h-4 w-4"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Link
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}
