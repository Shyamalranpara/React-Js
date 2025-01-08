import React, { useState } from 'react'

const Login=()=>{
return(
    <h2>Please login!</h2>
)
}
const Log=()=>{
    const [log,setlog]=useState(false)

    const nlog = log?<h1>you are login!</h1>:<Login/>;
    return(
        <>
        <h1>Login</h1>
        
        <h2>{nlog}</h2>

        <button onClick={()=>{setlog(!log)}}>Submit</button>
        </>
    )
}
export default Log