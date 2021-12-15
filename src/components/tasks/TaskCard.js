import React, { useContext, useEffect, useState } from "react"
import { Button, Card, InputGroup, ListGroup } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import "./Task.css"
import { TaskContext } from "./TaskProvider"


export const TaskCard = ({task}) => {

    const { getTaskById, patchTask, getTasks } = useContext(TaskContext)
    
    const [ tasks, setTasks ] = useState({})



    const {taskId} = useParams();
	const navigate = useNavigate();

 

    const handleComplete = () => {
      
        patchTask(task.id)
             .then(getTasks)
              }


  useEffect(() => {
  console.log()
    getTaskById(taskId)
    .then((response) => {
      setTasks(response)
     
    })
    }, [])

    return (
   

  <Card>
  <Card.Header className="task__name">{task.task}</Card.Header>
  <Card.Body>
      <Card.Text className="Task__completeDate">Expected Completion: {new Date(task.taskCompletionDate).toLocaleDateString('en-us')}     
    </Card.Text>

       <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={handleComplete}/> Completed?
  </InputGroup>  
  <Button variant="secondary" onClick={() => {
      navigate(`/tasks/edit/${task.id}`)
  }}>Edit</Button>{' '}
  </Card.Body>
</Card>


     
     
)
}


// disabled={isLoading} 
//     onChange={event => 
//     event.preventDefault()
//     handleComplete()}