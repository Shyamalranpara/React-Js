import './App.css';

// import {Route,Routes} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Link,Navigate, Route, Routes} from 'react-router-dom';

import Signup from './Components2/Signup';
import Login from './Components2/Login';
import Products from './Components2/Products';
import Cart from './Components2/Cart';

function App() {

  const[isLoggedin,setIsLoggedin]=useState(JSON.parse(localStorage.getItem("currentUser")) || null);
  console.log(isLoggedin);
  useEffect(()=>{

  },[isLoggedin]);
  return (
    <div className='App'>

    <Routes>
    <Route path="/" element={<Signup/>}/>

      <Route path="/Login" element={<Login/>}/>

      <Route path="/Products" element={isLoggedin ? <Products/>:<Navigate to="/login"/>}/>
      <Route path="/cart" element={isLoggedin ? <Cart/>:<Navigate to="/login"/>}/>

      </Routes>

      
      </div>
  );
}

export default App;
