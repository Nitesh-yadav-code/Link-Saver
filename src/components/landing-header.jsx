
import ThemeToggle from "../components/theme-toggle"
import { Link } from "react-router-dom";
export default function LandingHeader() {
  const user = JSON.parse(localStorage.getItem("user")) || null
  return (
    <header className=" border-b bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto w-[90%] flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-blue-500"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-xl text-white font-bold">LinkVault</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <Link
              to="/dashboard"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Dashboard
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Log in
              </Link>
              <Link
                to ="/signup"
                className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
