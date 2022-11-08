import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='w-25 mx-auto mt-5 bg-dark text-white p-5 rounded-2'>
            <h2 className='my-2'>Please Login!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with our terms & condition?" />
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