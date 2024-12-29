import React from 'react'

const Bye = ({a,b}) => {

     let arr = [1,2,3,4,5]

       
       arr = [...arr, 6]

       let obj = {
         name:'yash',
         age:20
       }

       obj = {...obj, food:"pizza"}

         console.log(arr,obj)

         const numbers = [1, 2, 3, 4, 5];

// Use spread to unpack values, then add them using a loop
const sumArray = (...nums) => {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
};

// Spread the numbers array into the function
const sum = sumArray(...numbers);

console.log(`The sum is: ${sum}`);


  return (
    <div>

    {a}

    </div>
  )
}
export default Bye