import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Requirements for this react:
// 1. Should be able to input Vehicle number and Driver Name.
// 2. Checkin Time and Checkout Time.
// 3. Should be able to check how many vehicles are there in the garage right now.