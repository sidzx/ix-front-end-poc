import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navi from './Components/Navi.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Buffer } from 'buffer'

window.global=window
window.Buffer=Buffer

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  

  </StrictMode>,
)
