import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Cart } from './pages/cart/Cart'
import { Favorites } from './pages/favorites/Favorites'
import { Notification } from './pages/notification/Notification'
//import { NotFound } from '/src/shared/Components/NotFound/NotFound'
import { Login } from '/src/pages/auth/Login/Login'
import { ApiProvider } from "./ApiProvider";
import { Beans } from './pages/beans/Beans';
import { BeansComponent } from './pages/beans/BeansComponent';
import { Cappucino } from './pages/cappucino/Cappucino';

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
      {
        path: "auth",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "beans",
        element: <BeansComponent />,
      },
      {
        path: "cappucino",
        element: <Cappucino />,
      },
      //{
        //path: "*",
        //element: <NotFound />,
        //},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
