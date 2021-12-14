import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"

import { TaskCard } from "./TaskCard"


import "./Task.css"

import { TaskContext } from "./TaskProvider"


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
    <h2>Task</h2>
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