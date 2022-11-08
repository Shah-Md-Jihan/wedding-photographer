import React from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const ServiceAll = () => {
    return (
        <Container>
            <div style={{ marginTop: "125px" }} className="d-flex">
                <div className='w-75'>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className='w-25 ms-4'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-info mb-3 text-center'>Add Service</Card.Title>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicServiceName">
                                    <Form.Label>Service Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter service name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicRatings">
                                    <Form.Label>Ratings</Form.Label>
                                    <Form.Control type="number" placeholder="Ratings" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Price" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicDesc">
                                    <Form.Label>Description</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Description"
                                            style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Form.Group>

                                <Button variant="danger" type="submit">
                                    Add Service
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default ServiceAll;