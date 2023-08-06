import React from 'react';
import './ReviewDetails.css'

const ReviewDetails = ({customer}) => {
    const { img, name, review, ratings } = customer;
    return (
        <div className="card-group m-5 border-8 w-80 ml-20">
            <div class="card">
                <img src={img} className="card-img-top rounded-lg" alt=""/>
                    <div class="card-body">
                        <h5 className="card-title text-2xl">{name}</h5>
                        <p className="card-title">Ratings:{ratings}</p>
                    <p className="card-text bg-slate-200 pt-2">{review.slice(0, 150)}</p>
                    </div>
            </div>

        </div>
    );

 


};

export default ReviewDetails;

