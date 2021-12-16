import React, {Component, useState} from "react";
import { Routes, Route, Link} from "react-router-dom";
import { Offcanvas, Button } from "bootstrap";


export const Home = () => (
    <>
      <div class="d-flex h-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <main class="px-3">
        <h1>Special Snowflakes</h1>
        <p class="lead">You're one-stop dashboard to keep track of upcoming events, daily tasks, and chat messages.</p>
        <p class="lead">
          <Link className="btn btn-lg btn-secondary fw-bold border-white bg-white" to="/">Meet The Team</Link>
        </p>
      </main>
  
      </div>
      </div>
    </>
)

  


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

