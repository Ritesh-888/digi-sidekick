// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Register } from "./pages/Register"
import {Login} from "./pages/Login"
import {Userlisting} from './pages/Userlisting'
import { BrowserRouter } from 'react-router-dom';
import { Edituser } from './pages/Edituser';
import { Adduser } from './pages/Adduser';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
     <BrowserRouter> 
      <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/listing" element={<Userlisting/>}/>
          <Route path="/edit/:id" element={<Edituser/>}/>
          <Route path="/add" element={<Adduser/>}/>
      </Routes>
      </BrowserRouter>
     
  );
}

export default App;
