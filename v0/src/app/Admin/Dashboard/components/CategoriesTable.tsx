"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Category {
  name: string;
  description: string;
  itemCount: number;
}

interface CategoriesTableProps {
  categories: Category[]; // Use the shared Category type here
}

const CategoriesTable: React.FC<CategoriesTableProps> = ({ categories }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>

          {/* Table to show Categories */}
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Category Name</th>
                <th className="px-4 py-2 text-left">Number of Items</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the categories array and display each category */}
              {categories.map((category, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{category.name}</td>
                  <td className="px-4 py-2">{category.itemCount}</td>
                  <td className="px-4 py-2">{category.description}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() =>
                        router.push(`/admin/categories/${category.name}`)
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
  );
};

export default CategoriesTable;
