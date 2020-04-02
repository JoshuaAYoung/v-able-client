import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { VableProvider } from './context/VableContext'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <VableProvider>
      <App />
    </VableProvider>
  </BrowserRouter>,
  document.getElementById('root')
)