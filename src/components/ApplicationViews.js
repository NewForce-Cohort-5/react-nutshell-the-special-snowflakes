import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { TaskProvider } from "./tasks/TaskProvider";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";

import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm"
import { EventDetail } from "./event/EventDetail";
import { EventProvider } from "./event/EventProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
     <EventProvider>
        <TaskProvider>
              <Routes>
               
            <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
             <Route path="tasks/create/*" element={<TaskForm />} />
          <Route path="tasks/*" element={<TaskList/>}/>
          <Route path="/events/*" element={<EventList />} />
        <Route path="/events/create/*" element={<EventForm />}/>
        <Route
          path="/events/detail/:eventId/*" render={props => {
            return {EventDetail}
          }}
        />
       </Routes>
        </TaskProvider>
      </EventProvider>
    
      </React.Fragment>
    );
  }
}
