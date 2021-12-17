import React, { useContext, useEffect, useState } from "react"
import { Button, Card, InputGroup } from "react-bootstrap"

import { useNavigate, useParams } from "react-router-dom"
import "./Task.css"
import { TaskContext } from "./TaskProvider"


export const TaskCard = ({task}) => {

    const { getTaskById, patchTask, getTasks } = useContext(TaskContext)

    
    
    const [ tasks, setTasks ] = useState({})



    const {taskId} = useParams();
	const navigate = useNavigate();

 

    const handleComplete = () => {
      console.log(handleComplete)
    if (task.isCompleted === true) {
        patchTask(task.id, false)
             .then(getTasks) 
            } else {
              patchTask(task.id, true)
              .then(getTasks) 
            }
            
             }
    
              

              // This might also work?

              const formatDate = date => {
                const dateSplit = date.split('-');
                // This will definitely work for our app
                return new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]).toString().split(' ').slice(1, 4).join(' ');
              }


  useEffect(() => {
  console.log()
  if (taskId) {
     getTaskById(taskId)
    .then((response) => {
      setTasks(response) 
       
    })
    }
    }, [])

    return (
   

  <Card>
 
  <Card.Header className="task__name">{task.task}</Card.Header>
  <Card.Body>
      <Card.Text className="Task__completeDate">Expected Completion: {formatDate(task.taskCompletionDate)}
    </Card.Text>

       <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleComplete}/> {taskId ? <>Completed?</> : <>To Be Completed</>}
  </InputGroup>  
  <Button variant="secondary" onClick={() => {
      navigate(`/tasks/edit/${task.id}`)
  }}>Edit</Button>{' '}
    </Card.Body>
</Card>


     
     
)
}


// This might also work?

// const formatDate = date => {
//   const dateSplit = getTheDate[0].split('-');
//   // This will definitely work for our app
//   return new Date(dateSplit, dateSplit - 1, dateSplit).toString().split(' ').slice(1, 4).join(' ');
// }

// disabled={isLoading} 
//     onChange={event => 
//     event.preventDefault()
//     handleComplete()}