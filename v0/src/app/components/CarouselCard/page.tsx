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
    <div className="w-80 h-[460px] bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
      <figure className="relative">
        <img
          src={imageUrl}
          alt={medTitle}
          className="w-full h-60 object-cover object-center rounded-t-2xl"
        />
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          Best Seller
        </div>
      </figure>

      <div className="px-5 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mt-3 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{medTitle}</h3>
            <h3 className="text-blue-700 text-lg font-bold">Rs. {price}</h3>
          </div>

          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </div>

      <div className="p-5 bg-gray-50 text-center rounded-b-2xl">
        <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-blue-700 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
