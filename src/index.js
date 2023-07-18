import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import '../src/css/Nav.module.css';
import App from '././container/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

