import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setupMSW from './mock/setup';
import GlobalStyle from './style/GlobalStyle';

setupMSW();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
