import React, { useEffect, useState } from 'react'

const Userinput = () => {
  const [tasks,setTask]=useState([])

  const[newTask,setNewTask]=useState("")

  const addtask=()=>{
    const obj={
      id:Date.now(),
      task:newTask
    }
    setTask([...tasks,obj])
    setNewTask("")
  }
  const editTask=(id)=>{
    let x = prompt(`Enter New Todo for this id:$(id)`)
    console.log(x,"inside edit")

    let y = tasks.map((el)=>{
      return el.id==id?{...el,task:x}:el
    })
    setTask(y)
  }

  const Delete = (id) => {
    const Deletetask = tasks.filter((task) => task.id !== id);
    console.log(Deletetask,"inside delete")
    setTask(Deletetask);
};

  useEffect(()=>{

  },[tasks])
  return (
    <div>

      <input type="text" placeholder='Add Task To Done' value={newTask} onChange={(e)=>{
        console.log(e)
        setNewTask(e.target.value)
      }}/>

      <button onClick={addtask}>Submit</button>
      {
        tasks.map((el)=>{
          return<>

          <p>{el.task}</p>
          <p>{el.id}</p>


          <button style={{color:"white",backgroundColor:"blue",border:"none",padding:"10px,10px,10px,10px"}} onClick={()=>{editTask(el.id)}}>Edit</button>

      <button style={{color:"white",backgroundColor:"red",border:"none",padding:"10px,10px,10px,10px"}} onClick={() => Delete(el.id)}>Delete</button>
          
          </>
        })
      }

    </div>
  )
}

export default Userinput