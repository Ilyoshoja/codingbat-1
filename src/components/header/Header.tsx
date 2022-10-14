import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import code from "../../assets/img/Coding.svg"
import bat from "../../assets/img/BAT.svg"
import java from "../../assets/img/java-svgrepo-com 1.svg"
import python from "../../assets/img/python-svgrepo-com 1.svg"
import "./header.scss"
import Offcanvas from 'react-bootstrap/Offcanvas';
interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Navbar variant="dark" id="navbar">
        <Container className="d-flex justify-content-around" id="container">
          <Navbar.Brand href="#home" id="navBrand">
            <div className="logo">
              <img src={code} alt="404" width={123} height={16} />
              <img src={bat} alt="404" width={70} height={16} />
            </div>
            <p>Code Practice</p>
          </Navbar.Brand>

          <Nav id="navLinks">
            <Nav.Link id="links" href="#home">About</Nav.Link>
            <Nav.Link id="links" href="#features">Help</Nav.Link>
            <Nav.Link id="links" href="#pricing">Code help+videos</Nav.Link>
            <Nav.Link id="links" href="#home">Done</Nav.Link>
            <Nav.Link id="links" href="#features">Prefs</Nav.Link>
          </Nav>

          <Nav className="navLinks gap-3">
            <button className="btnDark">Sign Up</button>
            <button className="btnGreen">Sign Up</button>
          </Nav>

          <Nav className="hamburger" onClick={handleShow}>
            <div></div>
            <div></div>
            <div></div>
          </Nav>
        </Container>
      </Navbar>
      <div className="logoNav">
        <div className="technologies">

          <div className="techIcons">
            <img src={java} alt="404" />
            <p>Java</p>
          </div>

          <div className="techIcons">
            <img src={python} alt="404" />
            <p>Python</p>
          </div>


        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" id="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <Navbar.Brand href="#home" id="navBrand">
            <div className="logo">
              <img src={code} alt="404" width={123} height={16} />
              <img src={bat} alt="404" width={70} height={16} />
            </div>
          </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-around flex-column" >
          <Nav  className="d-flex align-items-center justify-content-between flex-column" style={{height:"50%"}}>
            <Nav.Link id="links" href="#home">About</Nav.Link>
            <Nav.Link id="links" href="#features">Help</Nav.Link>
            <Nav.Link id="links" href="#pricing">Code help+videos</Nav.Link>
            <Nav.Link id="links" href="#home">Done</Nav.Link>
            <Nav.Link id="links" href="#features">Prefs</Nav.Link>
          </Nav>

          <Nav className="d-flex justify-content-around ">
            <button className="btnDark">Sign Up</button>
            <button className="btnGreen">Sign Up</button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>


      


    </>

  );
}

export default Header;
