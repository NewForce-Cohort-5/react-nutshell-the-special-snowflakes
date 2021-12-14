import React, { useContext, useEffect } from "react"


import { TaskCard } from "./TaskCard"


import "./Task.css"

import { TaskContext } from "./TaskProvider"
import { useNavigate } from "react-router-dom"


export const TaskList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { tasks, getTasks } = useContext(TaskContext)
 

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("TaskList: useEffect - getTasks")
    getTasks()
  
  }, [])
  const navigate = useNavigate()

  return (

    
    <>
    <h2>Tasks</h2>
    <button onClick={() => navigate("/Tasks/create")}>
        Add Task
    </button>
    <div className="tasks">
      {console.log("TaskList: Render", tasks)}
      {
        tasks.map(task => {

          
          return <TaskCard 
          key={task.id}
           task={task} />
          
        })
      }
    </div>
    </>
  )
}