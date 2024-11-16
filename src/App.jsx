import { Route, Routes } from 'react-router-dom'
import './App.css'
import User from './Components/User'
import AddUser from './Components/AddUser'
import UpdateUser from './Components/UpdateUser'
import Register from './Components/Register'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/update/:id' element={<UpdateUser />} />
        <Route path='/signup' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
