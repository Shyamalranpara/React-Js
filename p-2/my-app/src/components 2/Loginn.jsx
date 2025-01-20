import React, { useContext } from 'react';
import Home from './Home';
import { Context } from '../App';

const Loginn = () => {
  const { user, setUser } = useContext(Context);

  const name = () => {
    setUser("harry");
  };
  console.log(user);
  // console.log(setUser);
  
  return (
    <div>
      {user ? <Home /> : <h1>Please Login First</h1>}

      <button onClick={name}>Login</button>
    </div>
  );
};

export default Loginn;
