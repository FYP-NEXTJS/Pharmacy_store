import React from "react";

interface CategoryCardProps {
  categoryName: string;
  categoryDescription: string;
  imageUrl?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  categoryDescription,
  imageUrl = "/images/default-category.jpg",
}) => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-blue-900 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl">
      <img
        src={imageUrl}
        alt={categoryName}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl p-0 font-bold text-blue-700 dark:text-white">
          {categoryName}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-blue-100 text-sm">
          {categoryDescription}
        </p>
        <button className="mt-4 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
