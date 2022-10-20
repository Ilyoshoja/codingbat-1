import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import code from "../../assets/img/Coding.svg"
import bat from "../../assets/img/BAT.svg"
// import java from "../../assets/img/java.svg"
// import python from "../../assets/img/python.svg"
import cls from "./header.module.scss"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { changeLanguageID } from "../../redux/languageID";

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  // const [isActive, setIsActive] = useState(true);
  let dispatch = useAppDispatch()
  const languages = useAppSelector(state => state.languages.arr);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(languages);


  return (
    <header>

      <Navbar variant="dark" className={cls.navbar}>
        <Container className="d-flex justify-content-around" id={cls["container"]}>
          <Navbar.Brand className={cls.brand}>
            <div>
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


          {
            languages.map((lang, index) => {
              return (
                <div className={cls.icons} key={index}>
                   <img src={`https://img.icons8.com/color/344/${lang.url}--v1.png`} alt="404" width={30} height ={30} />
                  <p onClick={() => dispatch(changeLanguageID({ index: index, id: lang.id }))}>{lang.title}</p>
                </div>
              )
            })
          }

         


        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" id={cls["offcanvas"]}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand className={cls.brand}>
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
