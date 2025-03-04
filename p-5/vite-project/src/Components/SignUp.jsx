import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth , db } from '../../Firebaseconfig';
import { setDoc,doc } from 'firebase/firestore';
import { toast } from "react-toastify";

const SignUp = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [FirstName,setFirstName] = useState("");
  const [LastName,setLastName] = useState("");


  const Hsubmit = async (e) => {
    e.preventDefault();
  
    try {
      await createUserWithEmailAndPassword(auth, Email, Password);
      const user = auth.currentUser;
      console.log(user);
      
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: FirstName,
          lastName: LastName,
        });
      }

      console.log("User signed up successfully!");
      toast.success("User signed up successfully!", { position: "top-center" ,});

    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center", });
    }
  };


  return (
    <div>
      <h1>Firebase Authentication</h1>
      <form onSubmit={Hsubmit}>

        <h2>SignUp Form</h2>
        <input type="text" 
        placeholder='Enter First Name' 
        onChange={(e)=>setFirstName(e.target.value)} 
        required/>

        <br /><br />

        <input type="text" 
        placeholder='Enter Last Name' 
        onChange={(e)=>setLastName(e.target.value)} 
        required/>

        <br /><br />

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
        <button type="submit">Sign Up</button>
        </div>
        <p>Already Sign Up <a href="/Login"></a></p>
      </form>
    </div>
  );
};

export default SignUp;
