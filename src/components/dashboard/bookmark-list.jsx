
import { motion, AnimatePresence } from "framer-motion"
import BookmarkCard from "./bookmark-card"

export default function BookmarkList({ bookmarks, view, searchTerm, selectedTags, clearFilters }) {
  if (bookmarks.length === 0) {
    return (
      <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">No bookmarks found</p>
        {searchTerm || selectedTags.length > 0 ? (
          <button className="mt-2 text-sm text-blue-500 hover:underline" onClick={clearFilters}>
            Clear filters
          </button>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`grid gap-4 ${view === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
      <AnimatePresence>
        {bookmarks.map((bookmark) => (
          <motion.div
            key={bookmark.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <BookmarkCard bookmark={bookmark} view={view} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
