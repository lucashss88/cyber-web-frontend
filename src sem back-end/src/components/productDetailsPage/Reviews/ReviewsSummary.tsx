
import React from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
  summary: {
    average: number;
    totalReviews: number;
    distribution: { label: string, count: number, total: number }[];
  }
};

const ReviewsSummary: React.FC<Props> = ({ summary }) => {
  return (

    <div className="flex flex-col md:flex-row gap-8 items-center">
      
     
      <div className="bg-gray98 p-14 rounded-lg text-center">
        <p className="text-5xl font-bold">{summary.average}</p>
        <p className="text-gray-400 text-sm whitespace-nowrap mt-2">of {summary.totalReviews} reviews</p>
        <div className="flex justify-center text-yellow-400 my-2">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
      </div>

   
      <div className="flex-grow space-y-2 w-full">
        {summary.distribution.map(item => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="text-sm font-medium text-black w-24">{item.label}</span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(item.count / item.total) * 100}%` }}></div>
            </div>
            <span className="text-sm font-bold text-gray-400">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSummary;