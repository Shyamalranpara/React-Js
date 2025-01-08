import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate();

  const[currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || {});

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert(`${currentUser.name}Logged out successfully`);
    navigate("/login");
  }
  return (
    <div>
      <h2>Welcome {currentUser.name}</h2>

      <h2>Product page</h2>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Product