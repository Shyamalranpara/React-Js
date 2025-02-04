import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Signup from './components/Signup';
import Login from './components/Login';
import Products from './components/Products';
import Cart from './components/Cart';
import Button from 'react-bootstrap/Button';
import { ThemeProvider } from 'react-bootstrap';
import Cards from './components/Card';
import Loginn from './Context/Loginn';
import { Counter } from './Redux/Counter';
import { ParentComponent } from './components 2/Nchild';

export const Context = createContext();

function App() {
  // const [user, setUser] = useState("");

  // const[isLoggedin,setIsLoggedin]=useState(JSON.parse(localStorage.getItem("currentUser")) || null);
  // console.log(isLoggedin);

  // useEffect(()=>{

  // },[isLoggedin]);

  return (
    // <Context.Provider value={{ user, setUser }}>

      <div className="App">

        <Counter/>
        

        {/* <ParentComponent/> */}

        {/* <Loginn /> */}

        {/* <Cards/> */}


        {/* <Mems/> */}

        {/* <ThemeProvider>


  </ThemeProvider> */}

        {/* { <Routes>
    <Route path="/" element={<Signup/>}/>

      <Route path="/Login" element={<Login/>}/>

      <Route path="/Products" element={isLoggedin ? <Products/>:<Navigate to="/login"/>}/>
      <Route path="/cart" element={isLoggedin ? <Cart/>:<Navigate to="/login"/>}/>

      </Routes>} */}


      
      </div>
    //  </Context.Provider>
  );
}

export default App;
