import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; 

type Props = {
  review: {
    avatar: string;
    name: string;
    rating: number;
    date: string; 
    text: string;
  }
};

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return <div className="flex">{stars}</div>;
};


const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <div className="bg-gray98 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
        <div className="flex-grow">
          <p className="font-bold">{review.name}</p>
          <StarRating rating={review.rating} />
        </div>
     
        <p className="text-sm font-medium text-gray-300">{formatDate(review.date)}</p>
      </div>
      <p className="font-medium text-dark-gray">{review.text}</p>
    </div>
  );
};

export default ReviewCard;