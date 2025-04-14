import React from "react";

interface CardProps {
  productName: string;
  productDescription: string;
  price: number;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({
  productName,
  productDescription,
  price,
  imageUrl = "/images/syrup-category.jpg",
}) => {
  return (
    <div className="cursor-pointer w-80 backdrop-blur-md bg-blue-200/20 shadow-xl rounded-2xl p-6 border border-blue-300/20 hover:scale-105 transition-transform duration-300 ease-in-out text-white">
      <img
        src={imageUrl}
        alt={productName}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-center text-xl font-semibold text-blue-950">
        {productName}
      </h2>
      <p className="text-sm mt-2 text-blue-950">{productDescription}</p>

      <div className="flex justify-between items-center mt-4">
        <span
          className={`text-lg font-bold ${
            price > 0 ? "text-cyan-300" : "text-red-500"
          }`}
        >
          {price > 0 ? `Rs. ${price.toString()}` : "Out of Stock"}
        </span>
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
            price > 0
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={price <= 0}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
