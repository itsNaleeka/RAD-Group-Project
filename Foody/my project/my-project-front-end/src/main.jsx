import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './index.css'
import { Navbar } from './navbar.jsx'
import { NewTable } from './newTable.jsx'
import { EmployeeUpdate } from './update.jsx'
import { Application } from './application.jsx'
import { Hero } from './hero.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    children:[
        {
            path:"details",
            element:<NewTable/>
        },
        {
            path:"register",
            element:<Application/>
        },
        {
            path:"update",
            element:<EmployeeUpdate/>
        },
        {
          path:"hero",
          element:<Hero/>
        }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
