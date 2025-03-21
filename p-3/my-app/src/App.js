import logo from './logo.svg';
import './App.css';
import { Authcontext, Authprovider } from './Context/Index';
import Home from './Context/Home';
import About from './Context/About';
import Addtodo from './Components/Addtodo';
import { Provider } from 'react-redux';
import { Store } from './Store/Store';
import Todos from './Components/Todos';
import Add from './Components/Add';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Authcontext.Provider>

        <Authprovider>

        <Home/>

      <About/>
      
        </Authprovider>

      </Authcontext.Provider>

<h1>Lear Redux Toolkit</h1>


<Provider store={Store}>

<Addtodo/>
<Todos/>

</Provider>



<Provider store={Store}>
  <Add/>
  <Form/>
  </Provider>



    </div>
  );
}

export default App;
