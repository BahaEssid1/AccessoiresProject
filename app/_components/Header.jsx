import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import the icons

function Header() {
  return (
    <header className="bg-gray-900 shadow-xl mb-2">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
          alt="logo"
          className="w-24 mx-auto"
        />

        <div className="flex flex-1 items-center justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-white transition hover:text-orange-500" href="#">Home</a>
              </li>

              <li>
                <a className="text-white transition hover:text-orange-500" href="#">About Us</a>
              </li>
            </ul>
          </nav>

          {/* Search and Dropdown Section */}
          <div className="flex items-center">
            <div className="flex">
              <select
                className="bg-gray-50 text-gray-900 border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">All Accessories</option>
                <option value="phone-cases">Phone Cases</option>
                <option value="chargers">Chargers</option>
                <option value="screen-protectors">Screen Protectors</option>
                <option value="headphones">Headphones</option>
                <option value="earbuds">Earbuds</option>
                <option value="power-banks">Power Banks</option>
              </select>

              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-r-md px-4 py-2 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50"
              />
            </div>
          </div>

          {/* User icon and Cart icon */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              

              {/* Cart Icon (Panier) */}
              <a
                className="block   p-2.5 text-blue-500 transition  hover:text-blue-700"
                href="#"
              >
                <FaShoppingCart size={24} />
              </a>
              {/* User Icon */}
              <a
                className="block rounded-full bg-[#E5E7EB] p-2.5 text-gray-900 transition hover:bg-orange-500 hover:text-white"
                href="#"
              >
                <FaUser size={24} />
              </a>
            </div>

            <button
              className="block rounded bg-[#E5E7EB] p-2.5 text-gray-600 transition hover:bg-[#71c55d] hover:text-white md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
