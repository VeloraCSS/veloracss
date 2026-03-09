import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import veloraCss from '../../dist/velora.css?raw'
import App from './App'

// Inject velora.css into the app shell so vel- classes work in the playground UI itself
const styleEl = document.createElement('style')
styleEl.textContent = veloraCss
document.head.appendChild(styleEl)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
