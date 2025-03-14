import React from "react"
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StringAppWrapper } from './components/stringAppWrapper/stringAppWrapper.component'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StringAppWrapper/>
  </React.StrictMode>,
)
