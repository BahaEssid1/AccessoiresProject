// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext"; // Import the useCart hook

const CartPage = () => {
  const { cartItems, getTotalPrice, removeFromCart } = useCart(); // Access cart items and functions

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-900">Your cart is empty</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

        <div className="space-y-6">
          {/* Display each item in the cart */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-md shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.details}</p>
                  <p className="text-lg font-semibold text-gray-900">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)} // Handle removing the item
                className="text-sm text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 p-4 bg-white rounded-md shadow-sm flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Total Price:</h2>
          <span className="text-xl font-bold text-gray-900">${getTotalPrice()}</span>
        </div>

        {/* Proceed to Checkout button */}
        <div className="mt-6">
          <button
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
