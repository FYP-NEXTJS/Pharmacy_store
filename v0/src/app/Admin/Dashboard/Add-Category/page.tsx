"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type CategoryForm = {
  categoryName: string;
  categoryDescription: string;
};

const AddCategory: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryForm>();

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [serverError, setServerError] = useState<string>("");

  const sendData = async (data: CategoryForm) => {
    try {
      const payload = {
        name: data.categoryName,
        description: data.categoryDescription,
      };

      const response = await fetch("/api/profile/Categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        setServerError(errorData.message || "Something went wrong!");
      } else {
        setServerError("");
        setSuccessMessage("Category added successfully!");
        reset(); // Reset the form after success
      }
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
      setServerError(error.message || "Something went wrong!");
    }
  };

  const onSubmit: SubmitHandler<CategoryForm> = (data) => {
    setSuccessMessage("");
    setServerError("");
    sendData(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 flex justify-center items-center">
        <section className="rounded-xl bg-white shadow-md p-8 w-1/3">
          <h2 className="text-2xl font-serif mb-6">Add a New Category</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="block text-lg">
              Category Name
              <input
                className="mt-2 bg-white text-black p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Example: Electronics"
                {...register("categoryName", {
                  required: "Category name is required",
                  minLength: { value: 3, message: "Minimum length is 3" },
                })}
              />
              {errors.categoryName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.categoryName.message}
                </p>
              )}
            </label>

            <label className="block text-lg mt-4">
              Category Description
              <textarea
                className="mt-2 p-2 w-full bg-white text-black h-32 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the category here..."
                {...register("categoryDescription", {
                  maxLength: { value: 500, message: "Maximum length is 500" },
                  required: {
                    value: true,
                    message: "Category description is required",
                  },
                })}
              />
              {errors.categoryDescription && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.categoryDescription.message}
                </p>
              )}
            </label>

            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Category
            </button>
          </form>

          {/* Success message */}
          {successMessage && (
            <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
          )}

          {/* Server-side error message */}
          {serverError && (
            <p className="text-red-600 mt-4 font-medium">{serverError}</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AddCategory;
