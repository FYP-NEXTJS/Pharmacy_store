"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation"; // Import the useParams hook

// Medicine type (you can update this according to your schema)
type Medicine = {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
};

const CategoryDetailPage: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryName, setCategoryName] = useState<string>("");
  const router = useRouter();

  // Use the useParams hook to get the dynamic categoryName from the URL
  const { categoryName: categoryParam } = useParams();

  useEffect(() => {
    if (categoryParam) {
      setCategoryName(categoryParam as string);
      fetchMedicines(categoryParam as string);
    }
  }, [categoryParam]);

  const fetchMedicines = async (categoryName: string) => {
    try {
      const response = await fetch(
        `/api/profile/medicines?category=${categoryName}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMedicines(data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">{categoryName} Medicines</h1>

      {loading ? (
        <p>Loading medicines...</p> // You can replace this with a Spinner component
      ) : (
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Medicine Name</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{medicine.name}</td>
                  <td className="px-4 py-2">{medicine.description}</td>
                  <td className="px-4 py-2">
                    <img
                      src={medicine.imageUrl}
                      alt={medicine.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">${medicine.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailPage;
