import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Review from '../Shared/Review/Review';

const ServiceDetail = () => {
    const service_info = useLoaderData();
    return (
        <Container>
            <div style={{ marginTop: "125px" }}>
                <div className='text-center'>
                    <img src={service_info?.image} alt="serviceImage" />
                    <h2 className='my-2'>{service_info.name}</h2>
                </div>
                <div className='w-50 mx-auto'>
                    <div className='d-flex justify-content-evenly py-3'>
                        <h3>${service_info.price}</h3>
                        <div className='d-flex align-items-center'>
                            <div>
                                <span className='fs-6 fw-bold'>Rating: {service_info?.rating}</span>
                            </div>
                            <div className='mb-1 ms-1 text-warning'>
                                <span className='fs-6'><FaStar /></span>
                            </div>
                        </div>
                        <div>
                            <Button variant='warning'>Book Now</Button>
                        </div>
                    </div>
                </div>
                <div className='w-75 mx-auto text-center'>
                    <p>{service_info?.description}</p>
                </div>
                {/* review section  */}
                <div>
                    <Review service_info={service_info}></Review>
                </div>
            </div>
        </Container>
    );
};

export default ServiceDetail;