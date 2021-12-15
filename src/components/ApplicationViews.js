import { Route,Routes } from "react-router-dom";
import React, { Component } from "react";
import { EventList } from "./event/EventList";
import { EventForm } from "./event/EventForm"
import { EventDetail } from "./event/EventDetail";
import { EventProvider } from "./event/EventProvider";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <EventProvider>
        <Routes>
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

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route path="/events/*" element={<EventList />} />
        <Route path="/events/create/*" element={<EventForm />}/>
        <Route path="/events/detail/:eventId/*" element={<EventDetail />} />
        <Route path="/events/edit/:eventId/*" element={<EventForm />} />
      </Routes>
      </EventProvider>
      </React.Fragment>
    );
  }
}
