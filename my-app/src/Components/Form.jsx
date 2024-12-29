import React, { useState } from "react";

const Form = () => {
  const [log, setLog] = useState(() => {
    const savedLogs = localStorage.getItem("logs");
    return savedLogs ? JSON.parse(savedLogs) : [];
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addin = () => {
    const obj = {
      id: Date.now(),
      username,
      email,
      password,
    };

    const updatedLog = [...log, obj];
    setLog(updatedLog); // Update the state
    localStorage.setItem("logs", JSON.stringify(updatedLog)); // Save to localStorage

    setUsername(""); // Clear the input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Signup Form</h1>
      
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />
      <input
        type="text"
        placeholder="Enter your email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="password" // Use password input type for better security
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={addin}>Signup</button>

      <h2>Registered Users:</h2>
      {log.map((el) => (
        <div key={el.id}>
          <p>Username: {el.username}</p>
          <p>Email: {el.email}</p>
          <p>Password: {el.password}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Form;
