import React, { useEffect, useState } from 'react'

function Count(){
    const [count,setcount]=useState(0)

    const increase =()=>{
        setcount(count+1)
    }

    useEffect(()=>{
      console.log("reloaded")
    },[count])
    return(
        <div>
            <h1>Count:- {count}</h1>
            <button onClick={increase}>Increment</button>
        </div>
    )
}
export default Count