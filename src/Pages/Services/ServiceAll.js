import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceAll = () => {
    const [serviceName, setServiceName] = useState('');
    const [ratings, setRatings] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [allServices, setServices] = useState([]);

    const handleServiceName = (e) => {
        setServiceName(e.target.value);
    }
    const handleRatings = (e) => {
        setRatings(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleImage = (e) => {
        setImage(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }


    useEffect(() => {
        fetch('http://127.0.0.1:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })

    const services = {
        name: serviceName,
        rating: ratings,
        price: price,
        image: image,
        description: description
    }

    const handleServiceAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('http://127.0.0.1:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added!');
                    form.reset();
                }
            })
            .then(error => console.error(error))
    }


    return (
        <Container>
            <div style={{ marginTop: "125px" }} className="d-flex">
                <div className='w-75'>
                    <Row xs={1} md={2} className="g-4">
                        {
                            allServices.map(singleService => <Col key={singleService?._id} single_service={singleService}>
                                <Card>
                                    <Card.Img variant="top" src={singleService?.image} />
                                    <Card.Body>
                                        <Card.Title>{singleService?.name}</Card.Title>

                                        <div className='d-flex align-items-center'>
                                            <div>
                                                <span className='fs-6 fw-bold'>Rating: {singleService?.rating}</span>
                                            </div>
                                            <div className='mb-1 ms-1 text-warning'>
                                                <span><FaStar /></span>
                                            </div>
                                        </div>


                                        <Card.Text>
                                            {singleService?.description}
                                        </Card.Text>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className='fw-bold fs-5 text-warning'>${singleService?.price}</p>
                                            <p><Link><Button variant='warning'>Bye Now</Button></Link></p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>
                <div className='w-25 ms-4'>
                    <Card>
                        <Card.Body>
                            <Card.Title className='text-info mb-3 text-center'>Add Service</Card.Title>
                            <Form onSubmit={handleServiceAdd}>
                                <Form.Group className="mb-3" controlId="formBasicServiceName">
                                    <Form.Label>Service Name</Form.Label>
                                    <Form.Control type="text" onBlur={handleServiceName} placeholder="Enter service name" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicRatings">
                                    <Form.Label>Ratings</Form.Label>
                                    <Form.Control type="number" onBlur={handleRatings} placeholder="Ratings" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" onBlur={handlePrice} placeholder="Price" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicImage">
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type="text" onBlur={handleImage} placeholder="Price" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicDesc">
                                    <Form.Label>Description</Form.Label>
                                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                                        <Form.Control
                                            onBlur={handleDescription}
                                            as="textarea"
                                            placeholder="Description"
                                            style={{ height: '100px' }}
                                            required
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
        </Container >
    );
};

export default ServiceAll;