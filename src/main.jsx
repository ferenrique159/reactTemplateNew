import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { getRoutes } from './router/routes';
import './styles.css'
import { AppTheme } from './theme';

const router = getRoutes();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={router}/>
    </AppTheme>
  </React.StrictMode>,
)
