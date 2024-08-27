import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WorkoutContextProvider } from '../src/context/WorkoutContext.jsx'
import { AuthContextProvider } from './context/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <WorkoutContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>

    </WorkoutContextProvider>
  </React.StrictMode>,
)
