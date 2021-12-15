import { Route,Routes } from "react-router-dom";
import React, { Component } from "react";
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
        <EventProvider>
          <MessageProvider>
            <Routes>
              

              <Route path="/messages" element={<MessageList />} />

              

              <Route path="/events/*" element={<EventList />} />
              <Route path="/events/create/*" element={<EventForm />}/>
              <Route
                path="/events/detail/:eventId/*" render={props => {
                  return {EventDetail}
                }}
              />
            </Routes>
          </MessageProvider>
        </EventProvider>
      </React.Fragment>
    );
  }
}
