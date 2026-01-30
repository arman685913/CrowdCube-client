import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import router from './router.jsx';
import AuthProvider from './Firebase/AuthProveder.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
