import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// We need to install the react-router-dom package
// and import createBrowserRouter to create a router
// and RouterProvider to retrieve the router stored in a variable
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Recipes from './Pages/Recipes';
import About_us from './Pages/About_us';
import App from './App';

// create the routes for our router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/recipes',
    element: <Recipes />,
  },
  {
    path: '/aboutus',
    element: <About_us />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
