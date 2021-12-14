import React from "react"
import { InputGroup } from "react-bootstrap"
import "./Task.css"


export const TaskCard = ({ task }) => (
    <section className="task">
        <div className="task__id">ID: ${task.id}</div>
          <h3 className="task__name">Task: ${task.task}</h3>
          <InputGroup.Checkbox aria-label="Checkbox for following text input"/>
    </section>
)
