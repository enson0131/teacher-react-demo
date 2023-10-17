import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, Route, Link } from 'react-router';
// import reportWebVitals from './reportWebVitals';

const routeConfig = [
  { 
    path: '/',
    component: App,
  },
  { 
    path: '/defineproperty',
    component: LearnDefineProperty,
  }
]
// React 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router routes={routeConfig} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
