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
import Loggin from './Components/Loggin';
import Form from './Components/Form';


function App() {

  return (
    <div className='App'>

{/* 
      <Routes>

      <Route path="/" element={<Counter a="Hello, Counter!" />} />

      <Route path="/Blinkit" element={<Blinkit />} />

      <Route path="/" element={<Home/>}/>

      <Route path="/About" element={<About/>}/>
      </Routes> */}

      <Form/>
       
    <Loggin/>

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

<<<<<<< HEAD
      {/* <Counter a='hello' /> */}
=======
      {/* <Star name="shyamal" age={22} location="rajkot,guj"/> */}

      <Counter a='hello' />
>>>>>>> 7d6ad909be240950d33ec63d729ab3c1443f0d02

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
