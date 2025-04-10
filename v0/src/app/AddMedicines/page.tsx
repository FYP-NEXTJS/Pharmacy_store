"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMedicines() {
  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Price, setPrice] = useState("");
  const [Stock, setStock] = useState("");
  const [Distributor, setDistributor] = useState("");
  const [MedicineId, setMedicineId] = useState(""); // Medicine ID (for adding categories)
  const router = useRouter();

  const handleAddMedicines = async () => {
    try {
      const response = await fetch("/api/profile/AddMedicines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name,
          Type,
          Price,
          Stock,
          Distributor,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Medicine Added Successfully!");
        setMedicineId(data.MedicineId); // Assuming the response contains storeId
        router.push("/Profile");
      } else {
        alert(data.message || "Failed to Add Mecicines");
      }
    } catch (error) {
      console.error("Error Add Mecicines:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Add Medicines</h2>


       <input
        type="text"
        placeholder="Name"
        value={Name}
        onChange={(e) => setName(e.target.value.replace(/[^a-zA-Z]/g, ''))} // Only allows alphabets
        className="w-full p-2 border rounded mb-2"
        />


        <input
          type="text"
          placeholder="Type"
          value={Type}
          onChange={(e) => setType(e.target.value.replace(/[^a-zA-Z]/g, ''))}
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />

        <input
          type="number"
          placeholder="Stock"
          value={Stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
         <input
          type="text"
          placeholder="Distributor"
          value={Distributor}
          onChange={(e) => setDistributor(e.target.value.replace(/[^a-zA-Z]/g, ''))}
          className="w-full p-2 border rounded mb-4"
        />

        <button
          onClick={handleAddMedicines}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add
        </button>

        {/* Add Item Category Button */}
        <button
          onClick={() => router.push("/AddProducts")}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
        >
          Add Other Products
        </button>
      </div>
    </div>
  );
}
