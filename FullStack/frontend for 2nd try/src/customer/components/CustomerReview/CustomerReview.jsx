// CustomerReviews.js

import React, { useState } from 'react';
import { Star, StarBorder, CheckCircle } from '@mui/icons-material';
import { Rating, TextField } from '@mui/material';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Button } from '@headlessui/react';

const reviewsData = {
    overallRating: 4.7,
    totalReviews: 3498,
    ratingsBreakdown: {
        5: 2388,
        4: 785,
        3: 239,
        2: 18,
        1: 472,
    },
    reviews: [
        {
            name: "Bessie Cooper",
            date: "March 14, 2021",
            rating: 5,
            title: "Great product, smooth purchase",
            comment: "Almost completed building my replacement website and very pleased with the result. Although the customization is great the theme's features and Customer Support have also been great.",
            verified: true,
        },
        {
            name: "Floyd Miles",
            date: "March 14, 2021",
            rating: 4,
            title: "Super fast, easy to use",
            comment: "Really nicely designed theme and quite fast loading. The quickness of page loads you can really appreciate once you turn off page transition preloader in theme options. Custom support was really quick to respond to all my questions and resolve all my issues, very satisfied with this theme, VERY good value for money.",
            verified: true,
        },
    ],
};


const CustomerReviews = () => {
    const [newReview, setNewReview] = useState({
        name: '',
        date: '',
        rating: 0,
        title: '',
        comment: '',
        verified: false,
    });

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto mt-6 lg:mt-12">

            <div className=' grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Customer reviews & ratings</h2>
                    <div className="flex items-center mb-2">
                        <Rating value={reviewsData.overallRating} precision={0.1} readOnly />
                        <span className="ml-2 text-lg font-semibold">{reviewsData.overallRating} out of 5</span>
                    </div>
                    <p className="text-gray-600 mb-4">Based on {reviewsData.totalReviews} reviews</p>
                </div>

                <div>
                    <div className="mb-6">
                        {Object.keys(reviewsData.ratingsBreakdown).map((key) => (
                            <div key={key} className="flex items-center mb-1">
                                <span className="w-12 text-gray-700">{key} stars</span>
                                <div className="flex-grow bg-gray-300 h-2 mx-2 rounded">
                                    <div
                                        className="bg-[#307A35] h-2 rounded"
                                        style={{
                                            width: `${(reviewsData.ratingsBreakdown[key] / reviewsData.totalReviews) * 100}%`,
                                        }}
                                    ></div>
                                </div>
                                <span className="w-12 text-right text-gray-700">{reviewsData.ratingsBreakdown[key]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {reviewsData.reviews.map((review, index) => (
                <div key={index} className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex items-center mb-2">
                        <Rating value={review.rating} readOnly />
                        <h3 className="text-lg font-semibold ml-2">{review.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{review.comment}</p>
                    <div className="flex items-center justify-between">

                        <div >
                            <span className="font-semibold">{review.name}</span>
                            <span className="mx-2 text-gray-500">{review.date}</span>
                        </div>

                        <div className="flex items-center">
                            <button className="flex items-center text-blue-600 mr-4">
                                {/* <i className="fas fa-thumbs-up"></i> Font Awesome icon */}
                                <ThumbUpAltIcon />
                                <span className="ml-1">5</span>
                            </button>
                            <button className="flex items-center text-gray-600">
                                {/* <i className="fas fa-thumbs-down"></i> Font Awesome icon */}
                                <ThumbDownAltIcon />
                                <span className="ml-1">5</span>
                            </button>
                        </div>
                    </div>

                </div>
            ))}
            {/* <form className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={newReview.name}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Rating
                        value={newReview.rating}
                        required
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        label="Review Title"
                        variant="outlined"
                        name="title"
                        value={newReview.title}
                        required
                        error
                        helperText="Incorrect entry."
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        fullWidth
                        label="Review"
                        variant="outlined"
                        name="comment"
                        multiline
                        rows={4}
                        value={newReview.comment}
                        required
                    />
                </div>
                <Button variant="contained" color="primary" type="submit">
                    Submit Review
                </Button>
            </form> */}
        </div>
    );
};

export default CustomerReviews;
