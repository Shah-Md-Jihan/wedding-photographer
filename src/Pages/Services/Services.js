import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center pb-4'>Services</h1>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
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
                ))}
            </Row>
            <div className='d-flex justify-content-center'>
                <Link to={'/service'}>
                    <Button variant="danger" className='mt-4'>See All</Button>
                </Link>
            </div>
        </div>
    );
};

export default Services;