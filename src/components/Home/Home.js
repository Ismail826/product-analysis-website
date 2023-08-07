import React from 'react';
import potato from '../../picture/potato.png'
import './Home.css'
import useReview from '../../hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Link } from 'react-router-dom';

const Home = () => {
    const [review, setReview] = useReview([]);
    return (
        // Hero Section
        <section className=" m-auto bg-contain">
            <div className="md:flex md:flex-row bg-cyan-100 justify-center">

                <div className="md:w-2/5 md:flex md:flex-col justify-center space-x-20">
                    <h1 className="text-5xl">Potato</h1>
                    <h1 className="text-4xl text-cyan-500">Potato is a starchy Food</h1>

                    <p className="uppercase tracking-wide mb-2">The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae</p>

                    <button className="rounded-full py-4 px-8 mt-3 bg-indigo-600 text-gray-50 uppercase text-xl self-center my-5 hover:bg-orange-500">Live Demo</button>
                </div>
                <div className="md:w-3/5 ml-60 md:self-center my-20 mx-20">
                    <img src={potato} alt='' />
                </div>
            </div>

            {/* End Hero Section */}


            <div className="mt-10">
                <h1 className="align-items-center">Customer Review(3)</h1>
                <div className="md:grid md:grid-cols-3 md:content-center gap-8 ml-10">
                    {
                        review.slice(0, 3).map(customer => <ReviewDetails key={customer.id} customer={customer}></ReviewDetails>)
                    }
                </div>


            </div>
            <div className="mb-20">
                <Link className="bg-cyan-500 p-3 rounded-lg hover:bg-green-500 uppercase text-yellow-200" to="/reviews">
                    See All Reviews
                </Link>
            </div>

        </section>

    );
};

export default Home;