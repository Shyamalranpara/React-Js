import React, { useEffect, useState } from 'react';

// const Hooks = () => {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log('Interval running every second');
//     }, 1000); // Runs every second

//     const timeoutId = setTimeout(() => {
//       clearInterval(intervalId);
//       console.log('Interval stopped after 10 seconds');
//     }, 10000); // Stops after 10 seconds

//     return () => {
//       // Cleanup both interval and timeout on unmount
//       clearInterval(intervalId);
//       clearTimeout(timeoutId);
//     };
//   }, []);

//   return <div>Check the console for logs</div>;
// };


function Hooks() {
  const [count, setCount] = useState(0);
   
  const increase = () => {
    setCount(count + 1);
  };

    useEffect(()=>{
        console.log("reloaded")
    },[count])
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}



export default Hooks;