import React, { useContext, useEffect } from "react"


import { TaskCard } from "./TaskCard"


import "./Task.css"

import { TaskContext } from "./TaskProvider"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


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
    <Button variant="secondary" onClick={() => navigate("/Tasks/create")}>
        Add Task
    </Button>
    <div className="tasks">
      {console.log("TaskList: Render", tasks)}
      {

           tasks.filter(task => task.isCompleted === false).map(task => {
          
          
          return <TaskCard 
          key={task.id}
           task={task} />
          
        })
      }
    </div>
    </>
  )
}