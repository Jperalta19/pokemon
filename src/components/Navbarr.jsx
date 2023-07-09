import React from 'react';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {Link } from 'react-router-dom'


const Navbarr = () => {

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link className='nav-link' to="/">POKEMON</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='nav-link' to="/">Main</Link>
            <Link className='nav-link' to="/Pokemon">Pokemon</Link>
            <Link className='nav-link' to="/Items">Items</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>      
    </div>
  )
  
}

export default Navbarr
