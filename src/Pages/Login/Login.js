import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEyeSlash } from 'react-icons/fa';


const Login = () => {
    return (
        <div style={{ marginTop: "125px" }} className='w-25 mx-auto bg-dark text-white p-5 rounded-2'>
            <h2 className='my-2'>Please Login!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">
                            <FaEyeSlash />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <p>New to our site?Please <Link to="/register" className='text-info fw-bold text-decoration-none'>Sign Up</Link></p>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;