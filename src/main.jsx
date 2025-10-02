import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './pages/navbar.jsx'
import LoginPage from './pages/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <LoginPage/>
    </BrowserRouter>
  </StrictMode>,
)
