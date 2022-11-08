import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav className='me-4'>
                        <Link to={"/"} className="text-decoration-none text-white">Home</Link>
                    </Nav>
                    <Nav className='me-4'>
                        <Link to={"/login"} className="text-decoration-none text-white">Login</Link>
                    </Nav>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;