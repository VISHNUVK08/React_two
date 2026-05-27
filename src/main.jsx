import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import AuthProvider from './context/AuthContext'

import "./styles/global.css"
import ErrorBoundary from "./components/common/ErrorBoundary"

ReactDOM.createRoot(document.getElementById('root')).render(

  <ErrorBoundary>

  <AuthProvider>
    <App />
  </AuthProvider>
  </ErrorBoundary>

)