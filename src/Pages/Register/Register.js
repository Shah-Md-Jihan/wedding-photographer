import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEye } from "react-icons/fa";

const Register = () => {
    return (
        <div style={{ marginTop: "125px" }} className='bg-dark p-5 w-25 mx-auto text-white rounded-2' >
            <h2 className='my-2'>Please Sign Up!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

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
                            <FaEye />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with our terms & condition?" />
                </Form.Group>
                <p>Already have an account?Please <Link to="/login" className='text-warning fw-bold text-decoration-none'>Login</Link></p>
                <Button variant="info" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Register;