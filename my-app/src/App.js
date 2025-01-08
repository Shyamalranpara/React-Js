import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Bye from './Components/Bye';
import Counter from './Components/Counter';
import Blinkit from './Components/Blinkit';
import Ex from './Components/Ex';
import Greeting from './Components/Greeting';
import Star from './Components/Star';

import Product from './Components/Product';
import Count from './Components/Count';
import Hooks from './Components/Hooks';
import State from './Components/State';
import Userinput from './Components/Userinput';
// import {Route,Routes} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Form from './Components/Form';
import Log from './Components/Log';
// import Singup from './Components2/Singup';
// import Login from './Components2/Login';
// import { Route, Routes } from 'react-router-dom';
// import Products from './Components2/Products';



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

{/* 
      <Routes>

      <Route path="/" element={<Counter a="Hello, Counter!" />} />

      <Route path="/Blinkit" element={<Blinkit />} />

      <Route path="/" element={<Home/>}/>

      <Route path="/About" element={<About/>}/>
      </Routes> */}

    <Routes>
    <Route path="/" element={<Signup/>}/>

      <Route path="/Login" element={<Login/>}/>

      <Route path="/Products" element={isLoggedin ? <Products/>:<Navigate to="/login"/>}/>
      <Route path="/cart" element={isLoggedin ? <Cart/>:<Navigate to="/login"/>}/>

      </Routes>

      
      {/* <Form/> */}

      {/* <Log/> */}
       
    {/* <Home/> */}

      {/* <Count/> */}

      {/* <Product/> */}
      
      <br/>

    {/* <Userinput/> */}

    <br/>
    
      {/* <Hooks/> */}

      {/* <State/> */}
      {/* <Bye a={"Bye"} b={10}/> */}
        
      {/* <Hello/> */}



      {/* <Blinkit /> */}


    {/* <Star name="Shyamal" age={22} city="Rajkot,gujarat"/> */}

    {/* <Count/> */}

    {/* <Ex/> */}

    {/* <div>
  <Greeting name="Alice"  /> 
  <Greeting name="Bob" />
    </div> */}

  
    </div>
  );
}

export default App;
