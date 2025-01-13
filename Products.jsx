import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || {}
  );

  const [mems, setMems] = useState(() => {
    const storedMems = JSON.parse(localStorage.getItem("Mems"));
    return storedMems || [];
  });

  const Mems = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((json) => {
        const x = json.data.memes;
        setMems(x);
        localStorage.setItem("Mems", JSON.stringify(x));
        console.log("Updated Memes:", x); 
      });
      // console.log(mems);  
  };

  useEffect(() => {
    Mems();
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    alert(`${currentUser.name} logged out successfully`);
    navigate("/login");
  };

  const Edit = (id) => {
    const newname = prompt("Enter the new name");
    if (newname) {
      const updatemems = mems.map((el) =>
        el.id === id ? { ...el, name: newname } : el
      );
      setMems(updatemems);
      localStorage.setItem("Mems", JSON.stringify(updatemems));
    }
  };

  const Delete = (id) => {
    const deletemems = mems.filter((el) => el.id !== id);
    setMems(deletemems);
    localStorage.setItem("Mems", JSON.stringify(deletemems));
  };
  return (

    <div style={{width:"100%",backgroundColor:"#a2a8d3"}}>
      
        <h1 style={{fontFamily:"cursive"}}>Memes</h1>
    <hr />
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"20px"}}>


      {mems.map((el)=>(

 <Card style={{ width: '15rem',height:"auto",marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontFamily:"cursive"}} key={el.id}>
 <Card.Img className="mt-3" style={{width:"200px",height:"30vh",objectFit:"cover",borderRadius:"10%"}} variant="top" src={el.url} alt={el.name} />

 <Card.Body>

   <Card.Title className="mt-2">Name:{el.name}</Card.Title>
   <hr />
   <Card.Text className="mt-4">
   A meme is a thought that leads to a way of thinking, that develops into a belief, which leads to a way of life.
   </Card.Text>
        <hr />
   <div className="mt-4" style={{display:"flex",justifyContent:"space-around"}}> 
   <Button variant="primary" onClick={()=>Edit(el.id)}>Edit</Button>
   
   <Button variant="primary" onClick={()=>Delete(el.id)}>Delete</Button>
   </div>
  

 </Card.Body>
</Card>
      ))}
    
      </div>

      {/* product page */}
          <div style={{width:"100%",height:"30vh",color:"white",fontFamily:"cursive"}}>
      <h2 className='mt-5'>Welcome {currentUser.name}</h2>

      <h2 className='mt-3'>Memes page</h2>

      <button className='mt-3 bg-danger' style={{color:"white",border:"none",}} onClick={logout}>Logout</button>
      </div>
    </div>
    
  )
}

export default Products