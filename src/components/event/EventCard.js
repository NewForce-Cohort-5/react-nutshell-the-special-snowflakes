import React from "react";
import  Card  from "react-bootstrap/Card";
import  ListGroup  from "react-bootstrap/ListGroup";
import  ListGroupItem  from "react-bootstrap/ListGroupItem";
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventCard = ({event}) => (
  <Card className="upcomingEvent" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{event.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Date: {event.date}</ListGroupItem>
    <ListGroupItem>Location: {event.location}</ListGroupItem>
  </ListGroup>
</Card>

)