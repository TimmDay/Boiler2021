import React from 'react';
import ReactDOM from 'react-dom';
import './styles/typography.css';
import './styles/theme.css';
import './index.css';
import AppRouter from './routers/AppRouter'
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();