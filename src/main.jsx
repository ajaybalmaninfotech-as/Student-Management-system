
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StudentProvider } from "./context/StudentContext";
import React from 'react';

createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <BrowserRouter>
    <StudentProvider>
      <App />
    </StudentProvider>
  </BrowserRouter>
</React.StrictMode>
 
)
