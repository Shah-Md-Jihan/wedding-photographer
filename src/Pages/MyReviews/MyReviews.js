import React, { useContext, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/my/reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, []);


    return (
        <div style={{ marginTop: "125px" }}>
            <h1 className='text-center'>My reviews</h1>
            <Container>
                {
                    myReviews.map(review =>
                        <Card key={review?._id} review={review} border="primary" className="mb-2">

                            <Card.Body>
                                <Card.Title>{review?.service_name}</Card.Title>
                                <Card.Text>
                                    {review?.review}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center'>
                                        <div className='mt-1'>
                                            <p className='m-0'>{review?.rating}</p>
                                        </div>
                                        <div className='ms-1'>
                                            <span className='text-warning'><FaStar /></span>
                                        </div>
                                    </div>
                                    <div>
                                        <ButtonGroup aria-label="Basic example">
                                            <Button variant="warning">Edit</Button>
                                            <Button variant="danger">Delete</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>)
                }
            </Container>
        </div>
    );
};

export default MyReviews;