import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';


const ReviewBox = ({ review }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3 p-2">
                    {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                    <div className='text-center'>
                        <span className='fs-3'><FaUser /></span>
                        <h6 className='m-0'>{review.user_name}<br /><small>{review.user_email}</small></h6>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <div className='d-flex align-items-center'>
                            <p className='fs-6 fw-bold m-0'>Rating: {review.rating}</p>
                            <div className='mb-1 ms-2'>
                                <span className='text-warning'><FaStar /></span>
                            </div>
                        </div>
                        <p className="card-text">{review.review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;