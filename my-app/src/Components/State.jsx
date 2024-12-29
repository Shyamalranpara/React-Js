import {useState} from 'react'

const State = () => {
    // let data="Shyamal";

    // function updateData(){
    //     data="ram"
    //     alert(data)
    // }

    // state :- state is the inbuild method to update and change the value in function and component and manage the inner code in function,

    // state :- state is a built-in object that allows components to manage and store their own internal data. this data can be anything from user input to api Response.whenever the state changes,react-renders the components to Reflect the updated data.

    const [data,setdata]=useState("sem")
    
    function updateData(){
        setdata("ram");
    }
   
  return (
    <div>
        <h1>{data}</h1>  
        <button onClick={updateData}>Update data</button>
    </div>
  )
}

export default State