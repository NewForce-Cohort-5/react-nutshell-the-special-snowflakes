import React, { useContext, useEffect, useState } from "react"

import "./Task.css"
import { useNavigate, useParams } from 'react-router-dom';
import { TaskContext } from "./TaskProvider";
import { Button } from "react-bootstrap";



export const TaskForm = () => {
    const { addTasks, getTaskById, updateTask } = useContext(TaskContext)
    
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [task, setTask] = useState({ });   // setting the state?
        
        const [isLoading, setIsLoading] = useState(true);

        const {taskId} = useParams();
    const navigate = useNavigate();   //use nav allows you to change url locations?

    /*
    Reach out to the world and get customers state
    and locations state on initialization.
    // */
    // useEffect(() => {
    //   getLocations()
    // }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newTask = { ...task } // this is giving newAnimal state and properties
    
      
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newTask[event.target.id] = event.target.value
      // update state
      setTask(newTask)
    }

    // const handleClickSaveLocation = (event) => {
    //   event.preventDefault() //Prevents the browser from submitting the form
        

    //     //invoke addAnimal passing animal as an argument.
    //     //once complete, change the url and display the animal list
    //     addLocation(location)
    //     .then(() => navigate("/locations")) //telling it to useNavigate to redisplay updated animal list
    //     } 
    

        const handleSaveTask = () => {
          
            if (taskId){
              //PUT - update
              updateTask({
                  id: task.id,
                  task: task.task,
                  taskCompletionDate: task.taskCompletionDate,
                  isCompleted: false,
                  userId: parseInt(task.userId)
                  
              
              })
              .then(() => navigate(`/tasks/${task.id}`))
            }else {
              //POST - add
              addTasks({
                  task: task.task,
                  taskCompletionDate: task.taskCompletionDate,
                  isCompleted: false,
                  userId: parseInt(localStorage.getItem('react_nutshell_user')),
                 
                  
              })
              .then(() => navigate("/tasks"))
            }
        }
          

        useEffect(() => {
          if(taskId){
            getTaskById(taskId)
            .then(task => {
              setTask(task)
              setIsLoading(false)
            })
          } else {
            setIsLoading (false)
          }}, [])
  
      
    return (
      <form className="taskForm">
          <h2 className="TaskForm__title">New Task</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="taskName">Task:</label>
                  <input type="text" id="task" name="task" required autoFocus className="form-control" placeholder="task name" 
                   onChange={handleControlledInputChange}  defaultValue={task.task}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="taskDate">Completion Date:</label>
                  <input type="date" id="taskCompletionDate" name="taskCompletionDate" required  className="form-control" placeholder="Task Completion Date" 
                   onChange={handleControlledInputChange}  defaultValue={task.taskCompletionDate}/>
              </div>
          </fieldset>
            
          {/* <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveTask()
          }}>
        {taskId ? <>Save Task</> : <>Add Task</>}
            </button> */}

            <Button variant="secondary"
            disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveTask()
          }}>
        {taskId ? <>Save Task</> : <>Add Task</>}</Button>{' '}
      </form>
    )
    }