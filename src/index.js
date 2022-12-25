import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// can use multiple routers, starting with BrowserRouter.

import { BrowserRouter } from 'react-router-dom';
// browser router is context, learn more about context in react docs or https://courses.webdevsimplified.com/react-hooks-simplified
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
