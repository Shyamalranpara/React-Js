import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Counter({a}) {

    const [count, setCount]=useState(0)

        const increase=()=>{
            setCount(count+1)
        }
        
        const decrease=()=>{
            
                setCount(count-1)
            
        }
    
  return (
    <div>

      {/* <Link to='/Blinkit'>Blinkit</Link> */}

    <div> {a} </div>
    <div>counter :- {count}</div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}  disabled={count<1} >Decrease</button>

    </div>

  )
}

export default Counter
