import React from "react"
import { Button, FormControl, InputGroup } from "react-bootstrap"
import "./Task.css"


export const TaskCard = ({ task }) => (
    <section className="task">
        <div className="task__id">Task: {task.id}</div>
          <div className="task__name"> {task.task}</div>
    <div className="Task__completeDate">Expected Completion: {task.taskCompletionDate}</div>
          <InputGroup className="mb-3">
    <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Completed?
  </InputGroup>
  <Button variant="secondary">Edit</Button>{' '}
  


    </section>
)
