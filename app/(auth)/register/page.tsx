"use client"
import React, { useState } from 'react';

export default function RegisterPage() {
  // React states to store form input values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (!fullName || !email || !password) {
      setError('All fields are required');
      return;
    }

    setLoading(true); // Set loading state to true while submitting

    try {
      // Send POST request to the backend to register the user
      const response = await fetch('/api/register', { // Adjust the endpoint based on your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful registration (e.g., redirect to login page or dashboard)
        console.log('Registration successful', data);
        // Redirect to login page or automatically log in the user
        window.location.href = '/login'; // Example redirection to login
      } else {
        // Handle backend validation errors
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Something went wrong');
    } finally {
      setLoading(false); // Set loading state to false after submission
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 pt-16">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
            className="w-24 mx-auto"
          />
          <h4 className="mt-4 mb-6 text-xl font-semibold text-gray-700">
            Create Your Account
          </h4>
        </div>

        <p className="text-gray-600 mb-4">Please register to create an account</p>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Show error message if there is one */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="text-center mb-4 w-full">
            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium text-white rounded-md bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:opacity-90 transition shadow-lg"
              disabled={loading} // Disable the button while submitting
            >
              {loading ? 'Registering...' : 'REGISTER'}
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mt-6">
          <p className="text-sm text-black">Already have an account?</p>
          <button className="ml-2 text-sm font-medium px-4 py-1 text-orange-600 border-2 border-orange-600 rounded-md hover:border-orange-400 hover:text-orange-400 transition shadow-lg">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}
