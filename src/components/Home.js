import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {Button, Offcanvas} from "react-bootstrap";
import "./Home.css"

export const Home = () => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
  
    return (
    <>
      <div className="d-flex text-center text-white bg-dark home__container">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <main className="px-3 home__content">
        <h1>Special Snowflakes</h1>
        <p className="lead lead__tagline">You're one-stop dashboard to keep track of upcoming events, daily tasks, and chat messages.</p>
        <p className="lead">
        <Button className="btn btn-lg btn-secondary fw-bold border-white" onClick={handleShow}>Meet The Team</Button> 
        </p>
      </main>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
  
      </div>
      </div>

    </>
    )
  
}


// render(<Example />);


