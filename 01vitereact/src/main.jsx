import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

function MyApp(){
  return(
    <div>
      <h1>Custom Application????</h1>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
)
