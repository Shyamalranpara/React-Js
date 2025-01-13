import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (el) => formData.name === el.name && formData.password === el.password
    );

    if (user) {
      alert("Login successful");
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/products");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
