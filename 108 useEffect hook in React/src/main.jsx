import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode runs aur website 2 times during reloading in development server */}
    <App />
  </StrictMode>,
)
