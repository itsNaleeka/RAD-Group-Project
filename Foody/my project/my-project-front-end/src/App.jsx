import { useState } from 'react'
//import {EmployeeList} from './table.jsx'
//import {Navbar} from "./navbar.jsx"
import { NewTable } from './newTable.jsx'
//import './App.css'
//import { Application } from './application.jsx'
//import {EmployeeUpdate} from './update.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NewTable/>
    </>
  )
}

export default App
