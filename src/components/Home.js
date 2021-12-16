import React, { useState} from "react";
import {Button, Offcanvas, Card} from "react-bootstrap";
import "./Home.css"

export const Home = () => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
    <>
      <div className="d-flex text-center text-white bg-dark home__container">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

      <main className="px-3 home__content">
        <h1>Special Snowflakes</h1>
        <p className="lead lead__tagline">You're one-stop dashboard to keep track of upcoming events, daily tasks, and chat messages.</p>
        <p className="lead">
        <Button className="btn btn-lg btn-secondary fw-bold border-white btn__meet-team" onClick={handleShow}>Meet The Team</Button> 
        </p>
      </main>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Developer Team</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
        
        
        <Card className="team__card" style={{ width: '18rem' }}>
          <Card.Img className="img__meet-team" variant="top" src={require('../imgs/cam.png')} />
          <Card.Body>
            <Card.Title>Cameron</Card.Title>
            <Card.Text>
              Designed and developed both front-end interfaces and back-end functionality within the homepage and events section of the app.  
            </Card.Text>
            <Button href="https://github.com/cresuta" target="_blank" className="btn btn-lg btn-secondary fw-bold border-white btn__github">Github</Button>
          </Card.Body>
        </Card>
        

        
        <Card className="team__card" style={{ width: '18rem' }}>
          <Card.Img className="img__meet-team" variant="top" src={require('../imgs/heaven.png')} />
          <Card.Body>
            <Card.Title>Heaven</Card.Title>
            <Card.Text>
              Designed and developed both front-end interfaces and back-end functionality within the tasks section of the app. 
            </Card.Text>
            <Button href="https://github.com/heavenburdette1988" target="_blank" className="btn btn-lg btn-secondary fw-bold border-white btn__github">Github</Button>
          </Card.Body>
        </Card>
        

        
        <Card className="team__card" style={{ width: '18rem' }}>
          <Card.Img className="img__meet-team" variant="top" src={require('../imgs/andy.png')} />
          <Card.Body>
            <Card.Title>Andy</Card.Title>
            <Card.Text>
            Designed and developed both front-end interfaces and back-end functionality within the user authentication and messages section of the app. 
            </Card.Text>
            <Button href="https://github.com/Pstyne" target="_blank" className="btn btn-lg btn-secondary fw-bold border-white btn__github">Github</Button>
          </Card.Body>
        </Card>
        
         
        
        </Offcanvas.Body>
      </Offcanvas>
  
      </div>
      </div>

    </>
    )
  
}



