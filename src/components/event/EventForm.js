import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { useNavigate, useParams, } from 'react-router-dom';

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent} = useContext(EventContext)

    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {eventId} = useParams();
    const navigate = useNavigate();

    //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (e) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newEvent = { ...event }
      /* Animal is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEvent[e.target.name] = e.target.value
      // update state
      setEvent(newEvent)
    }

    const handleSaveEvent = () => {
      if (!event.title || !event.location || !event.date) {
          window.alert("Please input a title, location, and date.")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (eventId) {
          //PUT - update
          updateEvent({
            id: event.id,
            title: event.title,
            date: event.date,
            location: (event.location),
            userId: parseInt(localStorage.getItem("react_nutshell_user"))
          })
          .then(() => navigate(`/events/detail/${event.id}`))
        } else {
          //POST - add
          addEvent({
              title: event.title,
              date: event.date,
              location: event.location,
              userId: parseInt(localStorage.getItem("react_nutshell_user"))
          })
          .then(() => navigate("/events"))
        }
      }
    }


    useEffect(() => {
        if (eventId){
          getEventById(eventId)
          .then(event => {
              setEvent(event)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
    }, [])

    return (
      <form className="eventForm">
        <h2 className="eventForm__title">New Event</h2>
        
        <fieldset>
          <div className="form-group">
            <label htmlFor="eventTitle">Event Title: </label>
            <input type="text" id="eventTitle" name="title" required autoFocus className="form-control"
            placeholder="Event title"
            onChange={handleControlledInputChange}
            defaultValue={event.name}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date: </label>
            <input type="date" id="eventDate" name="date" required autoFocus className="form-control"
            placeholder="Event date"
            onChange={handleControlledInputChange}
            defaultValue={event.date}/>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Event Location: </label>
            <input type="text" id="eventLocation" name="location" required autoFocus className="form-control"
            placeholder="Event location"
            onChange={handleControlledInputChange}
            defaultValue={event.location}/>
          </div>
        </fieldset>

        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={e => {
            e.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveEvent()
          }}>
        {eventId ? <>Save Event</> : <>Create Event</>}</button>
      </form>
    )
}