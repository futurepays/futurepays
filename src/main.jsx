import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './routes';
import SharedState from './context/SharedState';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SharedState>
      <RouterProvider router={router} />
    </SharedState>
  </StrictMode>,
)
