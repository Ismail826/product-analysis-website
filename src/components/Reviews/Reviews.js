import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [review, setReview] =useReview([]);
    return (
        <div className="grid grid-cols-3">
            {
            review.map(customer => <ReviewDetails key={customer.id} customer={customer}></ReviewDetails>)
            }
        </div>
    );
};

export default Reviews;