import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QualinteerProvider } from './context/QualinteerContext'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <QualinteerProvider>
      <App />
    </QualinteerProvider>
  </BrowserRouter>,
  document.getElementById('root')
)