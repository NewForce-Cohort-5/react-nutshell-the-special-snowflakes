import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { TaskProvider } from "./tasks/TaskProvider";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import { TaskCard } from "./tasks/TaskCard";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
    
        <TaskProvider>
              <Routes>
               
            <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
             <Route path="tasks/create/*" element={<TaskForm />} />
          <Route path="tasks/*" element={<TaskList/>}/>

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />
        </Routes>
        </TaskProvider>
      </React.Fragment>
    );
  }
}
