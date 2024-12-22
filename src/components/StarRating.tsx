import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <span key={index} className="text-yellow-400">
            {rating >= value ? (
              <FaStar />
            ) : rating >= value - 0.5 ? (
              <FaStarHalf />
            ) : (
              <FaRegStar />
            )}
          </span>
        );
      })}
    </div>
  );
}
