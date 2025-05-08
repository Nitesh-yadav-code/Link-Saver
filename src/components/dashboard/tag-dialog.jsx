
import { useState } from "react"
import { useBookmarks } from "../../lib/bookmark-provider"

export default function TagDialog({ bookmark, onClose }) {
  const [newTag, setNewTag] = useState("")
  const { updateBookmark } = useBookmarks()

  const handleAddTag = (e) => {
    e.preventDefault()
    if (newTag.trim()) {
      const updatedTags = [...bookmark.tags, newTag.trim()]
      updateBookmark({ ...bookmark, tags: updatedTags })
      setNewTag("")
      onClose()
    }
  }

  return (
    <div className="absolute right-0 z-10 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:ring-gray-700">
      <div className="p-4">
        <h3 className="mb-2 text-sm text-slate-100 font-medium">Add Tag</h3>
        <form onSubmit={handleAddTag} className="flex gap-2">
          <input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Enter tag name"
            className="flex-1 rounded-md border border-gray-300 px-3 py-1 text-sm placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
