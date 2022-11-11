import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext/AuthProvider';


const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext);
    console.log(user?.uid);

    const handleSignOut = () => {
        providerLogOut()
            .then(() => {
                console.log('sign out successful');
            })
            .catch(e => console.error(e))
    }
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

                        {
                            user?.uid && <>
                                <Nav className='me-4'>
                                    <Link to={'/add/service'} className="text-decoration-none text-white">Add Service</Link>
                                </Nav>
                                <Nav className='me-4'>
                                    <Link to={'/my/reviews'} className="text-decoration-none text-white">My Reviews</Link>
                                </Nav>
                            </>
                        }


                        <Nav className='me-4'>
                            <Link to={'/about'} className="text-decoration-none text-white">About</Link>
                        </Nav>
                        <Nav className='me-4'>
                            <Link to={'/blogs'} className="text-decoration-none text-white">Blogs</Link>
                        </Nav>

                        {
                            user?.uid ?
                                <Nav className='me-4'>
                                    <Link onClick={handleSignOut} className="text-decoration-none text-white">Logout</Link>
                                </Nav>
                                :
                                <Nav className='me-4'>
                                    <Link to={'/login'} className="text-decoration-none text-white">Login</Link>
                                </Nav>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;