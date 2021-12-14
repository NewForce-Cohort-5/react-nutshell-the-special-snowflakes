import React from "react"
import { Link } from "react-router-dom"
import "./Task.css"

export const TaskCard = ({ task }) => (
    <section className="task">
          <h3 className="task__name">Task: ${task.task}</h3>
        
    </section>
)
