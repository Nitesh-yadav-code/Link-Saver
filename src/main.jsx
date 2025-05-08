import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider } from "./lib/theme-provider"
import { BookmarkProvider } from "./lib/bookmark-provider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <BookmarkProvider>
            <App />
        </BookmarkProvider>
    </ThemeProvider>
  </StrictMode>,
)
