import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const TaskContext = createContext()


export const TaskProvider = (props) => {
        const [tasks, setTask]  = useState([])

    const getTasks = () => {

    }

}

const addTasks = () => {

}

const getTaskById = (id) => {

}

const updateTask = task => {


}

const deleteTask = taskId => {

}

return (
    <TaskContext.Provider value={{
        addTasks, getTaskById, getTasks, updateTask, deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
)