import React from 'react';

function productItem() {
  return (
    <a
      href="#"
      className="group relative block overflow-hidden max-w-md mx-auto rounded-lg shadow-lg hover:shadow-xl transition-all" // Changed max-w-xs to max-w-md
    >
      <button
        className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <span className="sr-only">Wishlist</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-t-lg"
      />

      <div
        className="relative border border-gray-100 bg-white p-6 rounded-b-lg"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)', // Zigzag shape
        }}
      >
        {/* Replace span text with image */}
        <img 
          src="/new2.png" 
          alt="New" 
          className="h-8 w-auto" // Adjust size of the image
        />
        <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>
        <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
        <form className="mt-4 flex justify-center">
  <button
    className="block w-2/3 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
    style={{
      marginBottom: '10px', // Ensure no clipping of button at the bottom
    }}
  >
    Add to Cart
  </button>
</form>

      </div>
    </a>
  );
}

export default productItem;
