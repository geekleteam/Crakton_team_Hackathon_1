"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignup from '@/hooks/use-signup';
import { useToast } from "@/components/ui/use-toaster";
import Shimmer from '@/components/ui/shimmer';
import { useRouter } from "next/navigation";


const Signup = () => {
  const router = useRouter()
  const { toast } = useToast();

  const { mutate, isSuccess, isLoadingSignup, signupError } = useSignup();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (signupError) {
      toast({
        title: "Error",
        description: "Error signing up",
      });
    }
  }, [signupError, toast]);

  if(isSuccess){
    router.push("/login");
  }

  const handleSignup = (e) => {
    e.preventDefault();
    mutate({
      "email": email,
      "password": password,
      "first_name": username,
    });
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 shadow-md w-full max-w-md border rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
            <Input
              required
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="john@doe.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          
          {isLoadingSignup ? 
              <Shimmer height={50} width='full' />
            : <Button
              type="submit"
              className="w-full py-4 px-4 rounded transition duration-200 mt-4"
              disabled={isLoadingSignup}
            >
              Create account
            </Button>
          }


          <div className="mt-4 text-center">
            <p className="text-gray-700">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
