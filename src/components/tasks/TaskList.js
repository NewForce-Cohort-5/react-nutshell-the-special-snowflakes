import React, { useContext, useEffect, useState } from "react"


import { TaskCard } from "./TaskCard"


import "./Task.css"

import { TaskContext } from "./TaskProvider"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"


export const TaskList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { tasks, getTasks } = useContext(TaskContext)
  
  const [showCompletedTasks, setShowCompletedTasks] = useState(false)
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("TaskList: useEffect - getTasks")
    getTasks()
  
  }, [])

  // function handleClick() {
  //   console.log("you clicked the button!!")
  // }

  // document.querySelector("").addEventListener("click", handleClick)

const handleButton = () =>{

  // console.log("this is state", showCompletedTasks)
  // console.log("this is state with a ! in front", )
 setShowCompletedTasks(!showCompletedTasks)

  }

// onclick show array of true objects?



// console.log(handleButton)
  


  const navigate = useNavigate()

  return (

    
    <>

    <Button variant="outline-secondary" onClick={() => navigate("/Tasks/create")}>
        Add Task
    </Button>
    <Button variant="outline-secondary" onClick={handleButton}>
        
        {String(!showCompletedTasks ? 'Completed Task' : 'Task to be completed')}
    </Button>
        <h2>{String(showCompletedTasks ? 'Completed Task' : 'Task to be completed')}</h2>
    <div className="tasks">
      {console.log("TaskList: Render", tasks)}
      {

           tasks.filter(task => task.isCompleted === showCompletedTasks).map(task => { 
        
          
          
          return <TaskCard 
          key={task.id}
           task={task} />
          
        })
      }
    </div>



    </>
  )
}