import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'
import { useState } from "react";
export function Counter() {
  const count = useSelector((state) => state.Counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState("");

  useEffect(() => {
    console.log(count)
  }, [count])

  const handlePrompt = () => {
    const value = prompt("Enter Amount:");
    if (value !== null) setAmount(value);
  };

  const x = () => {
    return prompt(`Add Amount:`);
};
  return (
    <div>
      <div>
        <button style={{marginTop:"20px"}}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        &nbsp;
        <span>{count}</span>
        &nbsp;
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br/><br/>
        <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
<br/>
<button 
    style={{ marginTop: "20px" }}
    aria-label="Increment value"
    onClick={() => {
      const amount = Number(x()) || 0;
console.log("User entered:", amount); 
dispatch(incrementByAmount(amount));

    }}
>
    Add Amount By prompt  
</button>

&nbsp;
        <button
        style={{ marginTop: "20px" }}
        onClick={() => {
          dispatch(incrementByAmount(Number(amount) || 0));
          setAmount(""); 
        }}
      >
        Add Amount
      </button>
        
      </div>
    </div>
  )
}