import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { useParams, useNavigate } from "react-router-dom"
import  Card  from "react-bootstrap/Card";
import  ListGroup  from "react-bootstrap/ListGroup";
import  ListGroupItem  from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventDetail = () => {
  const { getEventById, deleteEvent} = useContext(EventContext)
  const [event, setEvent] = useState({})

	const {eventId} = useParams();
	const navigate = useNavigate();

  const handleDelete = () => {
    deleteEvent(event.id)
    .then(() => {
      navigate("/events")
    })
  }

  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((res) => {
      setEvent(res)
    })
    }, [])

  return (
    <Card className="event" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="event__title">
          {event.title}
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="event__date">Date: {event.date}</ListGroupItem>
        <ListGroupItem className="event__location">Location: {event.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant="primary" onClick={() => {navigate(`/events/edit/${event.id}`)}}>Edit</Button>
        <Button variant="primary" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  )
}