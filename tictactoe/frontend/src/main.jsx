import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {GameList} from './games/index.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/games",
        element: <GameList />,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App username={username}/>*/}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
