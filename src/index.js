import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import { VableProvider } from './context/VableContext';
import App from './App';
import './index.css';

ReactGA.initialize('UA-176941788-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <VableProvider>
      <App />
    </VableProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
