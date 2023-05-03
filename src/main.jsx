import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      {/* Raiz de Applicacion */}
      <BrowserRouter>

      <App />
      
      </BrowserRouter>
   
  </React.StrictMode>,
)
