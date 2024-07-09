import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to Crakton AI</h2>
        <h2 className="text-md  mb-6 text-center">Log in with your account to continue</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 rounded transition duration-200"
          >
           Login
          </Button>
        </form>

        <div className="mt-4 text-center">
            <p className="text-gray-700">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
          </div>
      </div>
    </div>
  );
};

export default LoginScreen;
