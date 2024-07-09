"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from "@/components/ui/sheet";
import { useNavContext } from "@/hooks/use-navcontext.hook";
import { Button } from "@/components/ui/button";


function GuestLogin() {
    const navContext = useNavContext();

    const handleLogin =() =>{}
    
    return ( <Sheet
		open={navContext.navProps.openUserProfile}
		onOpenChange={navContext.toggleUserProfile}
	>
		 	<SheetContent side={"right"}>
			 <SheetTitle>Login Now</SheetTitle>

			 <div className="border border-gray-100 dark:border-slate-700 mt-6 p-2 rounded-lg">
                <h2 className="font-extrabold text-md dark:text-white">
                    New to Crackton?
                </h2>
                <h4 className="text-xs text-slate-500 my-2">
					Sign up to get your own personalized timeline!
                </h4>


                <div className="mt-3">
                    <Button className='rounded-xl w-full dark:text-white py-2 px-2 font-bold capitalize  text-black border dark:border-slate-700'
                        onClick={handleLogin}
                    >
                        Login
                    </Button>

                </div>
            </div>

			</SheetContent>

		</Sheet> );
}

export default GuestLogin;