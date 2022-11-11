import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';


const ServiceAll = () => {
    useSetTitle('Services')
    const { loader } = useContext(AuthContext);
    const [allServices, setServices] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    if (loader) {
        return <Spinner style={{ margin: "300px 700px" }} className='' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }



    return (
        <Container>
            <div style={{ marginTop: "125px" }}>
                <h1 className='text-center mb-4'>My Services</h1>
                <div className='w-100'>
                    <Row xs={1} md={3} className="g-4">
                        {
                            allServices.map(singleService => <Col key={singleService?._id} single_service={singleService}>
                                <Card className='h-100'>
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
                                            {singleService?.description.slice(0, 40)}...
                                        </Card.Text>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p className='fw-bold fs-5 text-warning'>${singleService?.price}</p>
                                            <p>
                                                <Link to={`/services/${singleService?._id}`}>
                                                    <Button variant='warning'>View Details</Button>
                                                </Link>
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>
            </div>
        </Container >
    );
};

export default ServiceAll;