import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ItemsBlock} from './state'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App items={ItemsBlock} />
  </React.StrictMode>
);

