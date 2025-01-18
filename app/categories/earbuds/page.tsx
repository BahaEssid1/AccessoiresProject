"use client";
import React from 'react';
import { useCart } from "@/context/CartContext";  // Importing useCart to access addToCart
import Filter from '../_components/Filter'; // Importing the Filter component
import BreadCrumb from '../_components/BreadCrumb'; // Importing the Breadcrumb component

const EarbudsPage = () => {
  const { addToCart } = useCart(); // Access the addToCart function

  // List of earbuds products
  const earbuds = [
    { id: "1", title: "Earbud 1", price: 25 },
    { id: "2", title: "Earbud 2", price: 30 },
    { id: "3", title: "Earbud 3", price: 35 },
    { id: "4", title: "Earbud 4", price: 40 },
    { id: "5", title: "Earbud 5", price: 45 },
    { id: "6", title: "Earbud 6", price: 50 },
    { id: "7", title: "Earbud 7", price: 55 },
    { id: "8", title: "Earbud 8", price: 60 },
    { id: "9", title: "Earbud 9", price: 65 },
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb Section */}
      <div className="mb-6">
        <BreadCrumb currentPage="Earbuds" /> {/* Pass "Earbuds" */}
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Filter Section on the Left */}
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:mr-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold">Filters</h2>
          </div>
          <Filter /> {/* Filter Component */}
        </div>

        {/* Earbuds List Section */}
        <div className="lg:w-3/4 w-full">
          <h1 className="text-3xl font-bold mb-4">Earbuds</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earbuds.map((earbud) => (
              <li
                key={earbud.id}
                className="bg-white p-4 rounded shadow-md flex flex-col justify-between"
              >
                <h3 className="text-xl font-medium">{earbud.title}</h3>
                <p className="text-gray-700 mt-2">Price: ${earbud.price}</p>
                <button
                  onClick={() => addToCart({ ...earbud, quantity: 1 })} // Add to cart when button is clicked
                  className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EarbudsPage;
