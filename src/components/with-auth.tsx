import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from '@/hooks/use-auth'
import { log } from "console";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn } = useAuth();
    const router = useRouter();


    console.log("isLoggedIn0--", isLoggedIn)
    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/login"); // Redirect to login page
      }
    }, [isLoggedIn, router]);


    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
