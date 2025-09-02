import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';
import ReviewsSummary from './ReviewsSummary';


type SummaryData = {
  average: number;
  totalReviews: number;
  distribution: { label: string, count: number, total: number }[];
};


type ApiReview = {
  id: number;
  name_user: string;
  url_image_user: string;
  message: string;
  rating: number;
  created_at: string;
};


const ReviewsSection = ({ productId }: { productId: number }) => {

  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [allReviews, setAllReviews] = useState<ApiReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

 
  const [visibleReviewsCount, setVisibleReviewsCount] = useState(3);

  useEffect(() => {
    if (!productId) return;

    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3001/api/products/reviews/${productId}`);
        if (!response.ok) {
          throw new Error('Falha ao buscar as avaliações.');
        }
        const apiData = await response.json();

        
        const summaryFromApi = apiData.summary;
        const formattedSummary: SummaryData = {
          average: parseFloat(summaryFromApi.media),
          totalReviews: summaryFromApi.reviews,
          distribution: [
            { label: "Excellent", count: summaryFromApi.excellent, total: summaryFromApi.reviews },
            { label: "Good", count: summaryFromApi.good, total: summaryFromApi.reviews },
            { label: "Average", count: summaryFromApi.avarage, total: summaryFromApi.reviews },
            { label: "Below Average", count: summaryFromApi.bellow_average, total: summaryFromApi.reviews },
            { label: "Poor", count: summaryFromApi.poor, total: summaryFromApi.reviews },
          ]
        };
        setSummary(formattedSummary);

        
        setAllReviews(apiData.data);

      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  const handleViewMore = () => {
    setVisibleReviewsCount(allReviews.length);
  };

  if (isLoading) {
    return <div className="my-12">Carregando avaliações...</div>;
  }

  if (error) {
    return <div className="my-12 text-red-500">Erro ao carregar avaliações.</div>;
  }

 
  if (!summary || allReviews.length === 0) {
    return <div className="my-12">Nenhuma avaliação encontrada para este produto.</div>;
  }

  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6 mt-30">Reviews</h2>
      
      <ReviewsSummary summary={summary} />
      
      <div className="space-y-6 mt-8">
       
        {allReviews.slice(0, visibleReviewsCount).map((review) => (
          
          <ReviewCard 
            key={review.id} 
            review={{
              avatar: review.url_image_user,
              name: review.name_user,
              rating: review.rating,
              date: review.created_at,
              text: review.message
            }} 
          />
        ))}
      </div>

      {visibleReviewsCount < allReviews.length && (
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