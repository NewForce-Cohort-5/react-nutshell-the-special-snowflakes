import React, { useState, createContext } from "react"

export const TaskContext = createContext()



export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])
    const currentUser = localStorage.getItem("react_nutshell_user")
    
//will need to update fetch("") calls
     const getTasks = () => {
        return fetch(`http://localhost:8088/tasks?userId=${currentUser}`)
        .then(res => res.json())
        .then(setTasks)
    }

    const addTasks = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
        })
        
        .then(getTasks)
      
    }


    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}`)
            .then(res => res.json())

    }
    
    const patchTask = (taskId, isComplete) => {

        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isCompleted: isComplete})
        })
    }
    // const deleteTask = taskId => {
    //     return fetch(`http://localhost:8088/tasks/${taskId}`, {
    //         method: "DELETE"
    //     })
    //         .then(getTasks)
    // }
    
    

    const updateTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(task)
        })
          .then(getTasks)
      }
      


    return (
        <TaskContext.Provider value={{
            tasks, addTasks, getTasks, patchTask, updateTask, getTaskById
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
