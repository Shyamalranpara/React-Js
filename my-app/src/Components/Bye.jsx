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

  return (
    <div>

    {a}

    </div>
  )
}
export default Bye