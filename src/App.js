import React from 'react'
import Data from './components/Data'
import Newuser from "./pages/Newuser"
import EditUser from "./pages/EditUser"

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
export default function App() {
  return (
    <Router>

<Routes>
<Route path='/' element={<Data/>} ></Route>
<Route path='/Newuser' element={<Newuser/>} ></Route>
<Route path='/edituser/:id' element={<EditUser/>} ></Route>
</Routes>
    </Router>
  
  )
}
