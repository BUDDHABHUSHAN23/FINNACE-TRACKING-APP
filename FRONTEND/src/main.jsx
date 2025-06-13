import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'   // Import BrowserRouter for routing

createRoot(document.getElementById('root')).render(
  <StrictMode>   
    <BrowserRouter>   // Wrap your app with BrowserRouter this helps us to navigate in between pages 
        <App />
    </BrowserRouter>
    
  </StrictMode>,  
)

// here we will take all the routes
