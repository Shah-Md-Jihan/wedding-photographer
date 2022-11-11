import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';


const UpdateReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);
    const [error, setError] = useState('');

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleReviewUpdate = (e) => {
        e.preventDefault();

        if (review?.rating > 5 || review?.rating < 1) {
            setError('Ratings Star value must in (1-5)');
            return;
        }

        setError('');
        fetch(`http://127.0.0.1:5000/my/reviews/update/${storedReview?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('review updated');
                }
            })

    }

    return (
        <div className='pt-5 w-75 mx-auto' style={{ paddingBottom: "200px" }}>
            <h1 className='mt-5 text-center'>Update Review</h1>
            {error && <p className='text-danger'>{error}</p>}
            <Form onSubmit={handleReviewUpdate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rating Star (1-5)</Form.Label>
                        <Form.Control type="number" onChange={handleInputChange} name="rating" defaultValue={storedReview?.rating} />
                    </Form.Group>
                </Form.Group>

                <FloatingLabel controlId="floatingTextarea2" label="Review">
                    <Form.Control
                        onChange={handleInputChange}
                        name="review"
                        defaultValue={storedReview?.review}
                        as="textarea"
                        placeholder="Leave your review here"
                        style={{ height: '100px' }}
                        required
                    />
                </FloatingLabel>
                <Button variant="success" className='mt-2' type="submit">
                    Save
                </Button>
            </Form>
        </div>

    );
};

export default UpdateReview;