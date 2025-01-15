import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { name, password };

    if(users.find((el)=>{
     return name === el.name && password === el.password
    })){
      alert("User already exists please login to continue");
      navigate("/login");

    }
    else{

      
      const updatedUsers = [...users, obj];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      alert("Signup successful");
      navigate("/login");
    }

    setName("");
    setPassword("");

  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
