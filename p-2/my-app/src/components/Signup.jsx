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
    const updatedUsers = [...users, obj];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setPassword("");

    alert("Signup successful");
    navigate("/login");
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
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
