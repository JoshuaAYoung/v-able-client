import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { QualinteerContext } from './context/QualinteerContext'
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <QualinteerContext>
      <App />
    </QualinteerContext>
  </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
