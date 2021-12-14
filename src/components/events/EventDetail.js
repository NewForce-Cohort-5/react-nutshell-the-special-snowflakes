import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Animal.css"
import { useParams, useNavigate } from "react-router-dom"

export const EventDetail = () => {
  const { getEventById} = useContext(EventContext)
  const [event, setEvent] = useState({})

	const {eventId} = useParams();
	const navigate = useNavigate();


  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((res) => {
      setEvent(res)
    })
    }, [])

  return (
    <section className="event">
      <h3 className="event__title">{event.title}</h3>
      <div className="event__date">Event: {event.date}</div>
      <div className="event__location">Location: {event.location}</div>
    </section>

  )
}