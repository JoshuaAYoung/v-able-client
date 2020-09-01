import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { VableProvider } from './context/VableContext';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';

ReactGA.initialize('UA-173566344-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <VableProvider>
      <App />
    </VableProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
