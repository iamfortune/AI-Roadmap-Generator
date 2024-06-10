import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TermsOfService from './components/terms.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="App min-h-screen flex flex-col justify-between">
    <React.StrictMode>
    <App />
    <TermsOfService />
  </React.StrictMode>,
  </div>
)
