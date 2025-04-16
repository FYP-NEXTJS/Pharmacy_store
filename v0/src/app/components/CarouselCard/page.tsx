import React from "react";

interface CardProps {
  imageUrl?: string;
  description: string;
  medTitle: string;
  price: number;
}

const CarouselCard: React.FC<CardProps> = ({
  imageUrl = "/images/tablet-category.jpg", // Default image
  description,
  medTitle,
  price,
}) => {
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
      <figure className="relative">
        <img
          src={imageUrl}
          alt={medTitle}
          className="w-full h-56 object-cover object-center rounded-t-lg"
        />
        {/* Optional: Add a badge or label on the top-right corner */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Best Seller
        </div>
      </figure>

      <div className="px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 py-1 px-0">
            {medTitle}
          </h3>
          <h3 className="text-blue-950 text-xl py-1">
            {/* Price */}Rs. {price.toString()}
          </h3>
        </div>

        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="p-4 bg-gray-50 text-center">
        <button className=" py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
