import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./main.css"
import "./css/responsive.css"

import App from './App.jsx'
import Navbar from './components/navbar/navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />

    <App />
  </StrictMode>,
)
