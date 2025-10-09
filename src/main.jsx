import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'  // <-- Aquí
import AppRoutes from './routes/Routes.jsx'
import NavBar from './pages/navbar.jsx'
import Personajes from './components/personajes.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes/>
    <NavBar/>
  </BrowserRouter>
);