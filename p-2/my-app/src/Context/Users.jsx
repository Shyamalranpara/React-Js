import React, { useContext } from 'react';
import { Context } from '../App';

const Users = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <h2>Users Component</h2>
      
      {user ? <h1>Welcome {user}</h1> : <h1>Please Login First</h1>}

    </div>
  );
};

export default Users;
