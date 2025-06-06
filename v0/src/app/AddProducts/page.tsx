"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProducts() {
  const [itemType, setItemType] = useState("");
  const [storeId, setStoreId] = useState(""); // Store ID
  const [customUserId, setCustomUserId] = useState(""); // User ID
  const router = useRouter();

  const handleAddCategory = async () => {
    try {
      const response = await fetch("/api/profile/AddProducts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId, customUserId, itemType }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      alert("Product Added Successfully!");

      // ✅ Redirect to "Create Store" page after success
      router.push("/Profile");

    } catch (error) {
      console.error("Error adding category:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Add Products</h2>

        <input
          type="number"
          placeholder="ID"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={customUserId}
          onChange={(e) => setCustomUserId(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="text"
          placeholder="Type"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleAddCategory}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Products
        </button>
      </div>
    </div>
  );
}
