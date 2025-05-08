
import { useState } from "react"
import { useBookmarks } from "../../lib/bookmark-provider"
import { formatDate } from "../../lib/utils"
import TagDialog from "./tag-dialog"

export default function BookmarkCard({ bookmark, view }) {
  const { removeBookmark, updateBookmark } = useBookmarks()
  const [isTagDialogOpen, setIsTagDialogOpen] = useState(false)

  const handleRemove = () => {
    if (confirm("Are you sure you want to delete this bookmark?")) {
      removeBookmark(bookmark.id)
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = bookmark.tags.filter((tag) => tag !== tagToRemove)
    updateBookmark({ ...bookmark, tags: updatedTags })
  }

  const toggleFavorite = () => {
    updateBookmark({ ...bookmark, favorite: !bookmark.favorite })
  }

  if (view === "list") {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md border-slate-100 dark:border-gray-700 dark:bg-gray-800 md:flex-row">
        <div className="flex items-center gap-4 p-4 md:w-1/3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
            {bookmark.favicon ? (
              <img src={bookmark.favicon || "/placeholder.svg"} alt="" className="h-6 w-6 object-contain" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-400"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-slate-700 dark:text-slate-100  font-medium">{bookmark.title}</h3>
            <p className="truncate text-xs text-slate-700 dark:text-slate-300 ">{bookmark.url}</p>
          </div>
        </div>
        <div className="flex-1 p-4 pt-4 md:w-2/3">
          <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">{bookmark.summary}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {bookmark.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleRemoveTag(tag)}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              >
                {tag} &times;
              </button>
            ))}
            <button
              onClick={() => setIsTagDialogOpen(true)}
              className="inline-flex h-6 items-center rounded-full bg-gray-100 px-2 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 h-3 w-3"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Tag</span>
            </button>
            {isTagDialogOpen && <TagDialog bookmark={bookmark} onClose={() => setIsTagDialogOpen(false)} />}
          </div>
        </div>
        <div className="flex justify-between p-4 pt-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(bookmark.created_at)}</p>
          <div className="flex gap-2">
            <button
              onClick={toggleFavorite}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={bookmark.favorite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-4 w-4 ${bookmark.favorite ? "text-yellow-400" : ""}`}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span className="sr-only">{bookmark.favorite ? "Remove from favorites" : "Add to favorites"}</span>
            </button>
            <a
              href={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              <span className="sr-only">Open link</span>
            </a>
            <button
              onClick={handleRemove}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              <span className="sr-only">Delete bookmark</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-hidden rounded-lg border  shadow-sm transition-all hover:shadow-md border-slate-100 dark:border-gray-700 bg-slate-50 dark:bg-gray-800">
      <div className="flex items-start justify-between space-y-0 border-b p-4 pb-2 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded bg-gray-100 dark:bg-gray-700">
            {bookmark.favicon ? (
              <img src={bookmark.favicon || "/placeholder.svg"} alt="" className="h-5 w-5 object-contain" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-gray-400"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            )}
          </div>
          <div>
            <h3 className="line-clamp-1 text-slate-700 dark:text-slate-100 font-medium">{bookmark.title}</h3>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleFavorite}
            className="ml-2 h-8 w-8 rounded-md p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={bookmark.favorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 ${bookmark.favorite ? "text-yellow-400" : ""}`}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="sr-only">{bookmark.favorite ? "Remove from favorites" : "Add to favorites"}</span>
          </button>
          <button
            onClick={handleRemove}
            className="ml-2 h-8 w-8 rounded-md p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span className="sr-only">Delete bookmark</span>
          </button>
        </div>
      </div>
      <div className="p-4 pb-2">
        <p className="mb-2 line-clamp-1 text-xs text-slate-700 dark:text-slate-300">{bookmark.url}</p>
        <p className="line-clamp-3 text-gray-500 dark:text-gray-400 text-sm">{bookmark.summary}</p>
      </div>
      <div className="flex flex-col items-start gap-2 p-4 pt-2">
        <div className="flex flex-wrap gap-1">
          {/* {bookmark.tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleRemoveTag(tag)}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag} &times;
            </button>
          ))} */}
          <button
            onClick={() => setIsTagDialogOpen(true)}
            className="inline-flex h-6 items-center rounded-full bg-gray-100 px-2 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-3 w-3"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add Tag</span>
          </button>
          {isTagDialogOpen && <TagDialog bookmark={bookmark} onClose={() => setIsTagDialogOpen(false)} />}
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(bookmark.created_at)}</p>
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-3 w-3"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}
