
import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext(undefined)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    // Check if theme is stored in localStorage
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // If no theme in localStorage, check system preference
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
