
export default function BookmarkTabs({ activeTab, setActiveTab, view, setView }) {
  return (
    <div className="flex items-center justify-between">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("all")}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === "all"
                ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
            }`}
          >
            All Bookmarks
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === "recent"
                ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === "favorites"
                ? "border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-300"
            }`}
          >
            Favorites
          </button>
        </nav>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setView("grid")}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${
            view === "grid"
              ? "bg-blue-500 text-white"
              : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
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
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span className="sr-only">Grid view</span>
        </button>
        <button
          onClick={() => setView("list")}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${
            view === "list"
              ? "bg-blue-500 text-white"
              : "border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
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
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span className="sr-only">List view</span>
        </button>
      </div>
    </div>
  )
}
