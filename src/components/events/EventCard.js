import React from "react";;
import { Card } from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventCard = ({event}) => {
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>{event.Title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Date: {event.date}</ListGroupItem>
    <ListGroupItem>Location: {event.location}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  </Card.Body>
</Card>
}