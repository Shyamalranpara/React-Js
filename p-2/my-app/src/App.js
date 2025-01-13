import './App.css';
import { useEffect, useState } from 'react';
import { Link,Navigate, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import Button from 'react-bootstrap/Button';
import { ThemeProvider } from 'react-bootstrap';
import Cards from './components/Card';



function App() {
  
  const[isLoggedin,setIsLoggedin]=useState(JSON.parse(localStorage.getItem("currentUser")) || null);
  console.log(isLoggedin);
  
  useEffect(()=>{

  },[isLoggedin]);

  return (
    <div className="App">

{/* <Cards/> */}


      {/* <Mems/> */}
      {/* <ThemeProvider>


  </ThemeProvider> */}
  
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
