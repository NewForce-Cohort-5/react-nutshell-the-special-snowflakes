import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { TaskProvider } from "./tasks/TaskProvider";
import { TaskList } from "./tasks/TaskList";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <TaskProvider>
          
        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        {/* <Route
          path="/tasks" render={props => {
            return 
            // Remove null and return the component which will show the user's tasks
          }} */}

          <Route path="tasks/*" element={<TaskList/>}
        />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
          }}
        />
        
        </TaskProvider>
      </React.Fragment>
    );
  }
}
