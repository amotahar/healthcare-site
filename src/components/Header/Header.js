import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Banner from './Banner/Banner';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const{person,logOut}=useAuth()
 

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">Health Care</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink}  className="link_color"to="/home" >Home</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/services">Services</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/contact">Contact</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/article">About Us</Nav.Link>
{     
person.email ?
<span className="link_color" onClick={logOut}>Logout</span>
:
<Nav.Link as={HashLink} className="link_color" to="/login">Login</Nav.Link>
}
             
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Banner></Banner>



        
      </div>
    );
};

export default Header;