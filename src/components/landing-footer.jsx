
import {Link} from 'react-router-dom'
export default function LandingFooter() {
  return (
    <footer className="border-t bg-white py-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="container w-[90%] mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-500"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="text-lg text-white font-bold">LinkVault</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} LinkVault. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
