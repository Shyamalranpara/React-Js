import React, { useEffect, useState } from 'react'

const Form = () => {
  const [log, setlog] = useState(JSON.parse(localStorage.getItem("logs")) ||[])
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = () => {
    const obj = {
      id: Date.now(),
      username,
      email,
      password,
    };

    const updatedLogs = [...log, obj];
    setlog(updatedLogs); 
    console.log(updatedLogs)
    
    localStorage.setItem("logs", JSON.stringify(updatedLogs)); 

    setUsername('');
    setEmail('');
    setPassword('');
  };

  const editbtn = (id) => {
    let x = prompt(`Edit username: ${id}`);
    console.log(x,"inside edit")
  
    let em = prompt(`Edit email :${id}`);
    console.log(em,"inside edit")

    let pass = prompt(`Edit password: ${id}`);
    console.log(pass,"inside edit")

    let y = log.map((el)=>{
      return el.id==id?{...el,username:x, email:em, password:pass}:el          
    })
    setlog(y)

    localStorage.setItem("logs",JSON.stringify(y));
  };
  
  const deletbtn=(id)=>{
    const deletelog = log.filter((log)=>log.id!==id);
    console.log(deletelog,"inside delete")
    setlog(deletelog);

    localStorage.setItem("logs",JSON.stringify(deletelog))
  }
  useEffect(()=>{

  },[log])

  return (
    <div 
    style={
      { backgroundColor:"#dfd3c3",
        width:"90%",
      margin:"0 auto",
      marginTop:"20px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      }
      }>
        <div>
      <h1 style={{color:"#240747"}}>Singup Form</h1>

      <div style={{textAlign:"start"}}>
      <label htmlFor="name">Username</label>
      <input style={{width:"150%",height:"30px",border:"none",borderRadius:"5px"}} type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
     
      <br /> <br />

      <label htmlFor="name">Email</label>
      <input style={{width:"150%",height:"30px",border:"none",borderRadius:"5px"}} type='text' placeholder='Enter the Email' value={email} onChange={(e) => setEmail(e.target.value)} />
     
      <br /> <br />

      <label htmlFor="name">Password</label>
      <input style={{width:"150%",height:"30px",border:"none",borderRadius:"5px"}} type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
     
      <br /> <br />

      <button style={{width:"80px",height:"40px",color:"white",backgroundColor:"#005792",border:"none",borderRadius:"8px"}} onClick={user}>Login</button>
      </div>

      <h2 style={{color:"#240747"}}>Registered Users:</h2>

      {log.map((el) => (
        <div key={el.id}>
          <p>Username: {el.username}</p>
          <p>Email: {el.email}</p>
          <p>Password: {el.password}</p>
          
          <button style={{width:"80px",height:"30px",color:"white",backgroundColor:"#005792",border:"none",borderRadius:"5px"}} onClick={()=>{editbtn(el.id)}}>Edit</button>

          <button style={{width:"80px",height:"30px",color:"white",backgroundColor:"#005792",border:"none",borderRadius:"5px"}} onClick={()=>{deletbtn(el.id)}}>Delete</button>
          <hr />
        </div>
      ))}

      </div>

    </div>
  )
}

export default Form
