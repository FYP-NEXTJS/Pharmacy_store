"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Category = {
  name: string;
  description: string;
  imageUrl: string;
  itemsCount: number; // This is the number of items in each category
};

const ProductsPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/profile/Categories"); // Replace with actual API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Calculate the total number of categories
  const totalCategories = categories.length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Product Categories</h2>
          <button
            onClick={() => router.push("/users/addCategory")}
            className="bg-blue-600 text-white p-3 rounded-xl"
          >
            Add Category
          </button>
        </div>

        <div className="bg-gray-200 mr-4 rounded-2xl p-4">
          {loading ? (
            <p>Loading categories...</p> // You can replace this with a Spinner component
          ) : (
            <div>
              {/* Show total categories */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  Total Categories: {totalCategories}
                </h3>
              </div>

              <div className="min-h-screen bg-gray-100">
                <div className="p-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>

                    {/* Table to show Categories */}
                    <table className="min-w-full table-auto">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 text-left">Category Name</th>
                          <th className="px-4 py-2 text-left">Description</th>
                          <th className="px-4 py-2 text-left">Image</th>
                          <th className="px-4 py-2 text-left">
                            Number of Items
                          </th>
                          <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-4 py-2">{category.name}</td>
                            <td className="px-4 py-2">
                              {category.description}
                            </td>
                            <td className="px-4 py-2">
                              <img
                                src={category.imageUrl}
                                alt={category.name}
                                className="w-16 h-16 object-cover rounded-full"
                              />
                            </td>
                            <td className="px-4 py-2">{category.itemsCount}</td>{" "}
                            {/* Show number of items */}
                            <td className="px-4 py-2">
                              <button
                                onClick={() =>
                                  router.push(
                                    `/Admin/Dashboard/Categories/${category.name}`
                                  )
                                }
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                              >
                                View All Items
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
