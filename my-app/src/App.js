import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Bye from './Components/Bye';
import Star from './Components/Star';
import Counter from './Components/Counter';
// import Counter from './Components/Counter';
// import Counter from './Components/Counter';

function App() {
  return (
    <div>
      
        <Bye a={"Bye"} b={10}/>
        
      
        <Hello/>


       <Star name="shyamal" age={22} location="rajkot,guj"/>

       <Counter a='hello' />

    </div>
  );
}

export default App;
