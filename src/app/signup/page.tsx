import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
           Create a Crakton account
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-700">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
