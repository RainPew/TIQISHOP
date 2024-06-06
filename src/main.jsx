import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterCostom from './router.jsx'
import "./style/style.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterCostom />
  </BrowserRouter>
)
