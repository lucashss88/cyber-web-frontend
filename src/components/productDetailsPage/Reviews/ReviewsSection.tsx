// src/components/Reviews   { avatar: ronaldAvatar, name: 'Ronald Richards', rating: 5, date: '24 January, 2023', text: 'This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin's) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and plugs.' },{ avatar: graceAvatar, name: 'Grace Carey', rating: 4, date: '24 January, 2023', text: 'I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phones don't have the physical Sim tray anymore, but couldn't have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤' },ReviewsSection.tsx
import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import ReviewsSummary from './ReviewsSummary';

// Import das imagens dos usuários
import graceAvatar from '../../../assets/images/productDetailsPage/reviews/user-1.png';
import ronaldAvatar from '../../../assets/images/productDetailsPage/reviews/user-2.png';
import darcyAvatar from '../../../assets/images/productDetailsPage/reviews/user-3.png';
import johnAvatar from '../../../assets/images/productDetailsPage/reviews/user-1.png';
import janeAvatar from '../../../assets/images/productDetailsPage/reviews/user-2.png';


const fakeSummaryData = {
  average: 4.8, totalReviews: 123,
  distribution: [
    { label: "Excellent", count: 100, total: 123 },
    { label: "Good", count: 11, total: 123 },
    { label: "Average", count: 3, total: 123 },
    { label: "Below Average", count: 8, total: 123 },
    { label: "Poor", count: 1, total: 123 },
  ]
};

const allFakeReviews = [
  { avatar: graceAvatar, name: 'Grace Carey', rating: 4, date: '24 January, 2023', text: 'I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤' },
  { avatar: ronaldAvatar, name: 'Ronald Richards', rating: 5, date: '24 January, 2023', text: 'This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.' },
  { avatar: darcyAvatar, name: 'Darcy King', rating: 4, date: '24 January, 2023', text: 'I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition' },
  { avatar: johnAvatar, name: 'Jane Smith', rating: 3, date: '23 January, 2023', text: 'It\'s an okay phone, does the job but the battery life could be better.' },
  { avatar: janeAvatar, name: 'John Doe', rating: 5, date: '22 January, 2023', text: 'Absolutely love it! The best iPhone I have ever owned, camera is fantastic.' },
];


const ReviewsSection = () => {
  
  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleViewMore = () => {
    
    setVisibleReviews(allFakeReviews.length);
  };

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6 mt-30">Reviews</h2>
      <ReviewsSummary summary={fakeSummaryData} />
      
      <div className="space-y-6 mt-8">
        {allFakeReviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      
      {visibleReviews < allFakeReviews.length && (
        <div className="text-center mt-8">
          <button onClick={handleViewMore} className="py-2 px-5 border border-gray-300 rounded-lg hover:bg-gray-100">
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;