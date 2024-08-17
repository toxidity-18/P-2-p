import React, { useState } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/24/solid';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    const feedback = {
      rating,
      comment,
    };

    axios.post('https://host-api-zhbq.onrender.com/feedback', feedback)
      .then(() => {
        alert('Thank you for your feedback!');
        setRating(0);
        setComment('');
      })
      .catch((error) => console.error('Error submitting feedback:', error));
  };

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleRatingMouseEnter = (rate) => {
    setHoverRating(rate);
  };

  const handleRatingMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    
  
    <div className="max-w-md mx-auto p-6 bg-black rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-purple-500">Customer Feedback</h2>
      <div className="border rounded-lg p-6 bg-gray-200 mb-6 text-red-800 shadow-md">
        <div className="mb-6">
          <label className="block text-red-800 font-semibold mb-2">Rating</label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((rate) => (
              <StarIcon
                key={rate}
                className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
            (hoverRating || rating) >= rate ? 'text-yellow-400' : 'text-gray-300'
                
              }`} onClick={() => handleRatingClick(rate)}
                onMouseEnter={() => handleRatingMouseEnter(rate)}
                onMouseLeave={handleRatingMouseLeave}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-red-800 font-semibold mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="Write your comment here..."
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-yellow-400 text-red-800 py-2 px-4 rounded-md w-full hover:bg-green-600 transition-colors duration-200"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Feedback;

