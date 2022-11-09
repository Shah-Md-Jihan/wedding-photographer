import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import ReviewBox from './ReviewBox';


const Review = ({ service_info }) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/service/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    const service_id = service_info?._id;
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        const rating = form.rating.value;
        const review = form.review.value;

        const reviews = {
            service_id: service_id,
            user_email: user_email,
            user_name: user_name,
            rating: rating,
            review: review
        }

        fetch('http://127.0.0.1:5000/services/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review added!');
                    form.reset();
                }
            })
            .then(error => console.error(error))


    }
    return (
        <div>
            <h2>Reviews:</h2>
            {/* review box */}
            <div>
                {
                    reviews.map(review => <ReviewBox key={review._id} review={review}></ReviewBox>)
                }


                {/* review form  */}
                <div style={{ marginLeft: "11%" }} className="mt-5">
                    <Form onSubmit={handleReviewSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="hidden" name="user_email" value="jondoe@gmai.com" />
                            <Form.Control type="hidden" name="user_name" value="Jon Doe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <select className='form-control' name="rating">
                                <option value="5">--select 5 star rating--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Review">
                            <Form.Control
                                name="review"
                                as="textarea"
                                placeholder="Leave your review here"
                                style={{ height: '100px' }}
                                required
                            />
                        </FloatingLabel>

                        <Button variant="primary" type="submit" className='w-100 mt-2 rounded-0 border-0' style={{ background: "tomato" }} size="lg">
                            Leave Your Review
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Review;