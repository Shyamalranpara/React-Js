import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebaseconfig';
import { toast } from 'react-toastify';
import SignInwithGoogle from './SignInWIthGoogle'; 

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const Hsubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, Email, Password);
      console.log("User logged in successfully!");

      window.location.href = "/Profile";
      toast.success("User logged in successfully!", { position: "top-center", });
      
    } catch (error) {
      console.error(error.message); 
      toast.error(error.message, { position: "bottom-center", });
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={Hsubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <div>
        <button type="submit">Login</button>
        </div>
        <p>
          New user <a href="/SignUp">SignUp Here</a>
        </p>
        <SignInwithGoogle /> 
      </form>
    </div>
  );
};

export default Login;
