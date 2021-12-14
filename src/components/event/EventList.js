import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useNavigate } from "react-router"
import  Button  from "react-bootstrap/Button"

export const EventList = () => {
  // This state changes when `getEvents()` is invoked below
  const { events, getEvents } = useContext(EventContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
   getEvents()
  }, [])


  return (
    <>
    <h2>Events</h2>
    <Button variant="primary" type="submit" onClick={() => {navigate("/events/create")}}>Add New Event</Button>
    <div className="events">
      {
        events.map(event => {
          return <EventCard key={event.id} event={event} />
        })
      }
    </div>
    </>
  )
}