"use client";
import React , {useState, useEffect} from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Shimmer from '@/components/ui/shimmer';
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toaster";
import useLogin from '@/hooks/use-login';
import useAuth from '@/hooks/use-auth';

const LoginScreen = () => {
  const router = useRouter()
  const { setToken } = useAuth()

  const { toast } = useToast();
  const { mutate, data, isLoadingLogin, loginError } = useLogin();

 useEffect(() =>{
  if(data?.tokens?.access){
    setToken(data?.tokens?.access)
    router.push('/chat')
  }
 }, [data?.tokens?.access])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (loginError) {
      toast({
        title: "Error",
        description: "Error logging in. Please try agian later",
      });
    }
  }, [loginError, toast]);

 
  const handleLogin = (e) => {
    e.preventDefault();
    mutate({
      "username": email,
      "password": password,
    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Welcome to Crakton AI</h2>
        <h2 className="text-md  mb-6 text-center">Log in with your account to continue</h2>

        <form onSubmit={handleLogin}>
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
        

          {isLoadingLogin ? 
              <Shimmer height={50} width='full' />
            : <Button
              type="submit"
              className="w-full py-4 px-4 rounded transition duration-200 mt-4"
              disabled={isLoadingLogin}
            >
              Login
            </Button>
          }


        </form>

        <div className="mt-4 text-center">
            <p className="text-gray-700">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>
          </div>
      </div>
    </div>
  );
};

export default LoginScreen;
