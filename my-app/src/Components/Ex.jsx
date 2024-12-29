import React from 'react'

function Ex(){
  // spread operator
  let arr=[10,20,30,40,50];
  let arr2=[60,70,80,90];

  arr2=[...arr,arr2];
  console.log(arr2);

  let arr3=['Shyamal','Ranpara']
  arr3=[1,...arr3,'male',22]
  console.log(arr3);

  let obj={
    name:'shyamal',
    age:22
  }
  obj={...obj,food:'pizza'}
  console.log(obj);
  return (
    
    arr
    
  )
}

export default Ex