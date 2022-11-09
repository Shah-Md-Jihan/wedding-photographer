import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Card, FloatingLabel } from 'react-bootstrap';

const AddService = () => {
    const [serviceName, setServiceName] = useState('');
    const [ratings, setRatings] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');


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
        <div style={{ marginTop: "125px" }}>
            <div className='w-50 mx-auto'>
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
    );
};

export default AddService;