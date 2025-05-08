
export default function BookmarkSearch({ searchTerm, setSearchTerm, allTags, selectedTags, toggleTag }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="search"
          placeholder="Search bookmarks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>
      {allTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
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
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                selectedTags.includes(tag)
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
