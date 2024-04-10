import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
//import { About } from './pages/about/About';
import { ApiProvider } from "./ApiProvider";

const router = createBrowserRouter([
  {
    _element: <ApiProvider />,
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
