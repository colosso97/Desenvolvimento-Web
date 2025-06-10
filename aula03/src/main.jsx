import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Evento from './components/Evento'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
