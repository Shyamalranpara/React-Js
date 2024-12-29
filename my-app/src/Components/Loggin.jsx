import React, { useState } from 'react'

const Logout=()=>{
    return(
        <>
        <h2>loggin page</h2>
        </>
    )
}
const Loggin = () => {
    const[log,setlog]=useState(false)

    const nloggin = log ? <div>please loggin</div> : <Logout />;

  return (
    <>
    <div>Loggin</div>
    <div>{nloggin}</div>
    <button onClick={()=>{setlog(!log)}}>click</button>
    </>
  )
}

export default Loggin
