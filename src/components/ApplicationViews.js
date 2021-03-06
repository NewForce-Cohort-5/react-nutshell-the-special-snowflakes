import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import { TaskProvider } from "./tasks/TaskProvider";
import { TaskList } from "./tasks/TaskList";
import { TaskForm } from "./tasks/TaskForm";
import {Home} from "./Home"
import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm"
import { EventDetail } from "./event/EventDetail";
import { EventProvider } from "./event/EventProvider";
import { MessageList } from "./message/MessageList";
import { MessageProvider } from "./message/MessageProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <MessageProvider>
          <EventProvider>
            <TaskProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="messages" element={<MessageList />} />
                <Route path="tasks/edit/:taskId/*" element={<TaskForm />} />
                <Route path="tasks/create/*" element={<TaskForm />} />
                <Route path="tasks/*" element={<TaskList/>}/>
                {/* <Route path="tasks/completed*" element={<TaskList/>}/> */}

                <Route path="/events/*" element={<EventList />} />
                <Route path="/events/create/*" element={<EventForm />}/>
                <Route path="/events/detail/:eventId/*" element={<EventDetail />} />
                <Route path="/events/edit/:eventId/*" element={<EventForm />} />
              </Routes>
            </TaskProvider>
          </EventProvider>
        </MessageProvider>
      </React.Fragment>
    );
  }
}
