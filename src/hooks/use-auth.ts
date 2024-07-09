import { useState, useEffect, useCallback } from "react";

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize isLoggedIn based on presence of token in localStorage
    const token = localStorage.getItem("token");
    return !!token;
  });
  const checkLoginStatus = useCallback(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const setToken = useCallback((token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(!!token);
  }, []);

  const removeToken = useCallback(() => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return {
    isLoggedIn,
    setToken,
    removeToken,
  };
}

export default useAuth;
