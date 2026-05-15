import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Login'
import Register from './Register'
import Screen1 from './Screen1'
import FoodMenu from './FoodMenu'
import Home from './Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/screen1" element={<Screen1 />} />
      <Route path="/foodmenu" element={<FoodMenu />} />
    </Routes>

    </BrowserRouter>

  )

}

export default App
