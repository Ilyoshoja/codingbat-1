import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import code from "../../assets/img/Coding.svg"
import bat from "../../assets/img/BAT.svg"
import java from "../../assets/img/java-svgrepo-com 1.svg"
import python from "../../assets/img/python-svgrepo-com 1.svg"
import cls from "./header.module.scss"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  // const active = 'active';
  const [isActive, setIsActive] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header>

      <Navbar variant="dark" className={cls.navbar}>
        <Container className="d-flex justify-content-around" id={cls["container"]}>
          <Navbar.Brand className={cls.brand}>
            <div className="logo">
              <img src={code} alt="404" width={123} height={16} />
              <img src={bat} alt="404" width={70} height={16} />
            </div>
            <p>Code Practice</p>
          </Navbar.Brand>

          <Nav id={cls['links']}>
            <Nav.Link className={cls.link} >About</Nav.Link>
            <Nav.Link className={cls.link} >Help</Nav.Link>
            <Nav.Link className={cls.link} >Code help+videos</Nav.Link>
            <Nav.Link className={cls.link} >Done</Nav.Link>
            <Nav.Link className={cls.link} >Prefs</Nav.Link>
          </Nav>

          <Nav className={`${cls.link}`} id={cls['gap-3']} >
            <Link to={'/register'} id={cls["btndark"]}  >Sign Up</Link >
            <Link to={'/login'} id={cls["btngreen"]} >Sign In</Link >
          </Nav>

          <Nav className={cls.hamburger} onClick={handleShow}>
            <div></div>
            <div></div>
            <div></div>
          </Nav>
        </Container>
      </Navbar>
      <div className={cls.logo}>
        <div className={cls.technologies}>

          <div className={isActive ? cls.active : cls.icons} onClick={() => setIsActive(true)}>
            <img src={java} alt="404" />
            <p>Java</p>
          </div>

          <div className={isActive ? cls.icons : cls.active} onClick={() => setIsActive(false)}>
            <img src={python} alt="404" />
            <p>Python</p>
          </div>


        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" id={cls["offcanvas"]}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand  className={cls.brand}>
              <div className={cls.logo}>
                <img src={code} alt="404" width={123} height={16} />
                <img src={bat} alt="404" width={70} height={16} />
              </div>
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex justify-content-around flex-column" >
          <Nav className="d-flex align-items-center justify-content-between flex-column" style={{ height: "50%" }}>
            <Nav.Link className={cls.link} >About</Nav.Link>
            <Nav.Link className={cls.link} href="#features">Help</Nav.Link>
            <Nav.Link className={cls.link} href="#pricing">Code help+videos</Nav.Link>
            <Nav.Link className={cls.link} >Done</Nav.Link>
            <Nav.Link className={cls.link} href="#features">Prefs</Nav.Link>
          </Nav>

          <Nav className="d-flex justify-content-around ">
            <Link to={'/register'} id={cls["btndark"]}   >Sign Up</Link >
            <Link to={'/login'} id={cls["btngreen"]}  >Sign Up</Link >
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>





    </header>

  );
}

export default Header;
