import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav className='me-4'>
                            <Link to={'/'} className="text-decoration-none text-white">Home</Link>
                        </Nav>
                        <Nav className='me-4'>
                            <Link to={'/service'} className="text-decoration-none text-white">Service</Link>
                        </Nav>
                        <Nav className='me-4'>
                            <Link to={'/add/service'} className="text-decoration-none text-white">Add Service</Link>
                        </Nav>
                        <Nav className='me-4'>
                            <Link to={'/about'} className="text-decoration-none text-white">About</Link>
                        </Nav>
                        <Nav className='me-4'>
                            <Link to={'/login'} className="text-decoration-none text-white">Login</Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;