import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import LazyBoundary from './components/basic/Suspense';
import LearnProxy from './pages/LearnProxy';
import LearnDefineProperty from './pages/LearnDefineProperty';
import LearnReactOptimize from './pages/LearnReactOptimize';
import LearnCommentList from './pages/LearnCommentList';

// import reportWebVitals from './reportWebVitals';
// const LearnProxy = lazy(() => import('./pages/LearnProxy'));
// const LearnDefineProperty = lazy(() => import('./pages/LearnDefineProperty'));
// const LearnReactOptimize = lazy(() => import('./pages/LearnReactOptimize'));

const routeConfig = createBrowserRouter([
  {
    path: '/LearnReactOptimize',
    element: <LearnReactOptimize />,
  },
  {
    path: '/LearnCommentList',
    element: <LearnCommentList />,
  },
  {
    path: '/proxy',
    element: <LearnProxy />,
  },
  {
    path: '/defineproperty',
    element: <LearnDefineProperty />,
  },
  {
    path: '/',
    element: <App />,
  },
]);

// React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routeConfig} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
