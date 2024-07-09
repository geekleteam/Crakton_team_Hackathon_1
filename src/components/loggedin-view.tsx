
"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	
} from "@/components/ui/sheet";
import { Settings } from "lucide-react";
import { useNavContext } from "@/hooks/use-navcontext.hook";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";



function LoggedinView() {
	const router = useRouter();
    const navContext = useNavContext();

	const openAccounts =() =>{
		router.push('/account-settings');
	}

    return ( 
    <>
         <Sheet
			open={navContext.navProps.openUserProfile}
			onOpenChange={navContext.toggleUserProfile}
		>
			<SheetContent side={"right"}>
				<div className="h-full">
				<div className="flex flex-col justify-between h-full">

					<div>
						<SheetHeader>
							{/* <SheetTitle>Edit profile</SheetTitle> */}
							<SheetDescription>
								{/* avatar */}
								<div className="flex justify-between items-start mt-8">
									<div className="w-20 h-20 bg-blue-500 rounded-full p-8"></div>
									<div onClick={openAccounts} className="cursor-pointer">
									<Settings className="mr-2 h-5 w-5" />
									</div>
								</div>
								
								<p className="text-2xl  text-white mt-4">Mina karel</p>
								
								<div className="mt-4">
									<h3 className="text-sm text-[#717788]">About</h3>
									<p className="text-sm text-white">I specialize in UI.UX brand designing & webflow development</p>
								</div>
							</SheetDescription>

						
						</SheetHeader>

					</div>

		
				<div>
               	 <Button className="w-full transition duration-200" type="submit">Log out</Button>
              </div>

				</div>
				</div>
				

	


			</SheetContent>
		</Sheet>
    </> 
    );
}

export default LoggedinView;