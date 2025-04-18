"use client";
import CategoryCard from "./components/Category/page";
import { CarouselPlugin } from "@/app/components/CarouselPlugin/page";
import { useState, useEffect } from "react";

interface categories {
  name: string;
  description: string;
  imageUrl: string;
}
interface medicines {
  name: string;
  price: Number;
  category: string;
  stock: Number;
  imageUrl: string;
}
export default function Home() {
  const [categories, setCategories] = useState<categories[]>([]);

  const [medicines, setMedicines] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`/api/profile/Categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const categories = await response.json();
    setCategories(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const medicineCategories = [
    {
      categoryName: "Tablets",
      categoryDescription:
        "Wide range of oral medications for pain, fever, infections, and more.",
      imageUrl: "/images/tablet-category.jpg",
    },
    {
      categoryName: "Syrups",
      categoryDescription:
        "Liquid medicines ideal for children and soothing treatments.",
      imageUrl: "/images/syrup-category.jpg",
    },
    {
      categoryName: "Creams",
      categoryDescription:
        "Liquid medicines ideal for children and soothing treatments.",
      imageUrl: "/images/syrup-category.jpg",
    },
  ];

  const popularProducts = [
    {
      name: "Disprin",
      description: "Effective for Headache of all ages",
      price: 10,
    },
    {
      name: "Panadol",
      description: "Effective for Headache of Adults only!",
      price: 30,
    },
    {
      name: "Brufen",
      description: "Relieves pain, inflammation, and fever quickly.",
      price: 50,
    },
    {
      name: "Augmentin",
      description:
        "Antibiotic for bacterial infections in adults and children.",
      price: 200,
    },
    {
      name: "Calpol",
      description:
        "Safe and effective syrup for fever and mild pain in children.",
      price: 60,
    },
    {
      name: "Ponstan",
      description: "Fast relief from menstrual cramps and muscle pain.",
      price: 80,
    },
    {
      name: "Flagyl",
      description: "Used for bacterial and parasitic infections.",
      price: 40,
    },
    {
      name: "Cetirizine",
      description: "Relieves allergy symptoms like sneezing and runny nose.",
      price: 25,
    },
    {
      name: "ORS Sachets",
      description: "Rehydrates the body after dehydration or diarrhea.",
      price: 15,
    },
    {
      name: "Betnovate Cream",
      description:
        "Effective treatment for skin irritation, rashes, and eczema.",
      price: 120,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-red-500 h-[600px] w-full">
        <div className="flex flex-col justify-center items-start pt-32 pl-10 md:pl-32">
          <h1 className="text-4xl px-0 text-white md:text-5xl font-bold py-3">
            Medication for
          </h1>
          <h1 className="text-4xl px-0 text-white md:text-5xl font-bold py-3">
            Your Everyday Health
          </h1>
          <div className="flex flex-col text-lg text-white py-3">
            <p>Serving communities across Pakistan with quality medicines,</p>
            <p>affordable prices, and fast service.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="flex flex-col justify-center md:flex-row pt-20 px-5 gap-8 items-center">
        <div className="bg-yellow-500 h-[350px] rounded-lg w-full md:w-2/5  flex justify-center items-center">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="/images/delivery.jpg"
            alt="Delivery man image"
          />
        </div>
        <div className=" h-[350px] w-full md:w-2/5 p-6 rounded-lg">
          <h2 className="text-4xl font-bold text-blue-950 px-1 py-3 ">
            Why should you
          </h2>
          <h1 className="text-4xl font-bold text-blue-950 px-1 py-3">
            Choose Us?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            We’re more than just a pharmacy — we’re your health partner. From
            authentic medicines to everyday wellness essentials, we ensure
            quality, affordability, and care in every order. With expert
            guidance, reliable service, and a commitment to your well-being,
            choosing us means choosing trust.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex justify-center pt-28 items-center flex-col text-center py-10 px-4">
        <h2 className="mb-4 text-4xl py-0 font-bold text-blue-950">
          All Services You Will Get
        </h2>
        <p className="max-w-2xl text-base sm:text-lg text-gray-700">
          From prescription fulfillment to health consultations, we provide a
          full range of pharmacy services tailored to your well-being. Trust us
          for expert care, quality medications, and personalized support.
        </p>
      </div>

      <div className="flex gap-5 flex-wrap justify-center">
        {categories &&
          categories.map((med, index) => {
            return (
              <CategoryCard
                key={index}
                categoryName={med.name}
                categoryDescription={med.description}
                imageUrl={med.imageUrl}
              />
            );
          })}
      </div>

      {/* Popular Medicines  */}
      <div className="bg-gradient-to-r  from-green-400 via-blue-500 to-blue-700 mt-10">
        <div className="flex  justify-center items-center flex-col text-center py-10 px-4">
          <h2 className="mb-2 text-4xl font-bold text-white">
            Most Popular Products
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-white">
            We offer complete pharmacy services — from filling your
            prescriptions to giving expert health advice. Our team is here to
            provide you with trusted care, high-quality medicines, and friendly,
            personalized support for your health needs.
          </p>
        </div>

        {/* Carousel for Most Popular Items  */}
        <section className="flex justify-center">
          <CarouselPlugin products={popularProducts} />
        </section>

        <div className="flex justify-center">
          <button className="my-8 transition-all duration-200 px-4 hover:px-5 hover:py-3 py-2 border-red-600 border-2 text-red-600 bg-white hover:text-white hover:bg-red-600">
            All Products
          </button>
        </div>
      </div>

      {/* Tagline  */}
      <div className="pb-10 flex flex-col justify-center md:flex-row pt-20 px-5 gap-8 items-center">
        <div className=" h-[350px] w-full md:w-2/5 p-6 rounded-lg">
          <h2 className="text-4xl font-bold text-blue-950 px-1 py-3 ">
            Your Trusted Partner
          </h2>
          <h1 className="text-4xl font-bold text-blue-950 px-1 py-3">
            In Health Care
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            We focus on more than just selling medicine — we care about your
            health and peace of mind. From 100% genuine prescriptions to fast
            home delivery, we’re here to make healthcare simple, safe, and
            affordable. Our licensed pharmacists are ready to guide you, every
            step of the way.
          </p>
        </div>
        <div className="bg-yellow-500 h-[350px] rounded-lg w-full md:w-2/5  flex justify-center items-center">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="/images/delivery.jpg"
            alt="Delivery man image"
          />
        </div>
      </div>
    </div>
  );
}
