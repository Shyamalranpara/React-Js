import React from 'react';
import SeriesData from '../Api/SeriesData.json';
import List from './List';

const Loop = () => {
  // example of destructring 
  
  // const name ="shyamal"
  // const age ="23"
  // const obj={name,age}
  // console.log(obj)

  return (
    <ul className="grid grid-three-cols">
      {SeriesData.map((el) => (

        <List key={el.id} data={el} />

      ))}
    </ul>
  );
};

export default Loop;
