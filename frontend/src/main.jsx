import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ComicContextProvider from './Context/ComicContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComicContextProvider>
      <App />
    </ComicContextProvider>
  </StrictMode>,
)
