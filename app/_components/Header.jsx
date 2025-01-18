"use client"
import Link from 'next/link'; // Import the Link component
import { FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icons
import { useCart } from '@/context/CartContext'; // Import the cart context

function Header() {
  const { getTotalItems } = useCart(); // Get the total number of items in the cart
  const totalItems = getTotalItems(); // Total items count

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
                <Link href="/" className="text-white transition hover:text-orange-500">Home</Link>
              </li>
              <li>
                <a className="text-white transition hover:text-orange-500" href="#">About Us</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <div className="flex">
              <select
                className="bg-gray-50 text-gray-900 border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                onChange={(e) => {
                  const selectedCategory = e.target.value;
                  if (selectedCategory) {
                    window.location.href = `/categories/${selectedCategory}`;
                  }
                }}
              >
                <option value="">All Categories</option>
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

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Link
                href="/cart"
                className="relative block rounded-full bg-[#E5E7EB] p-2.5 text-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 text-xs font-semibold text-white bg-orange-600 rounded-full px-2">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link href="/cart" className="text-white text-sm font-medium">
                Cart
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="block rounded-full bg-[#E5E7EB] p-2.5 text-gray-900 transition hover:bg-orange-500 hover:text-white"
              >
                <FaUser size={24} />
              </Link>
              <Link href="/login" className="text-white text-sm font-medium">
                Connection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
