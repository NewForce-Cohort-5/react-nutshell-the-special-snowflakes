import React, { useContext, useEffect, useState } from "react"
import { Button, InputGroup } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import "./Task.css"
import { TaskContext } from "./TaskProvider"


export const TaskCard = ({task}) => {

    const { getTaskById } = useContext(TaskContext)
    
    const [ tasks, setTasks ] = useState({})

    const {taskId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
  console.log()
    getTaskById(taskId)
    .then((response) => {
      setTasks(response)
    })
    }, [])

    return (
    <section className="task">
        <div className="task__id">Task: {task.id}</div>
          <div className="task__name"> {task.task}</div>
    <div className="Task__completeDate">Expected Completion: {task.taskCompletionDate}</div>
          <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Completed?
  </InputGroup>
  <Button variant="secondary" onClick={() => {
      navigate(`/tasks/edit/${task.id}`)
  }}>Edit</Button>{' '}
      </section>
)
}
