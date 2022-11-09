import React from 'react';
import { FaStar, FaUser } from 'react-icons/fa';

const ReviewBox = ({ review }) => {
    return (
        <div className='d-flex align-items-end mb-5'>
            <div style={{ width: "15%" }} className="text-center">
                <span className='fs-3'><FaUser /></span>
                <h6 className='m-0'>{review.user_name}<br /><small>{review.user_email}</small></h6>
            </div>
            <div className='w-100 border border-warning fs-6 p-2 m-0 rounded-1'>
                <div className='d-flex align-items-center'>
                    <p className='fs-6 fw-bold m-0'>Rating: {review.rating}</p>
                    <div className='mb-1 ms-2'>
                        <span className='text-warning'><FaStar /></span>
                    </div>
                </div>
                <p className=''>{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewBox;