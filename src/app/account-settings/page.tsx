import { Navigation } from "@/components";
import { ArrowLeft } from "lucide-react";

function AccountSetting() {
    return (
        <div className="p-16">  
            <nav className="sticky w-full top-0 z-10 bg-slate-950 justify-between items-center p-1 border-b">
     
            <div className="border-b pb-2">
                <p className="flex space-x-2 items-center text-xl">Settings</p> 
                <p className="flex space-x-2 items-center text-[#717788] text-sm mt-1">Manage your accounts ettings & preferences</p> 
            </div>     
            
        {/* main content */}

        <div className="h-full grid gap-2 p-1 md:grid-cols-12 mt-8">
            <div className="col-span-12 md:col-span-3 ">
                Personalization
            </div>

            {/* Add form content here */}
            <div className="col-span-12 md:col-span-9 ">
                Account
            </div>
        </div>
        </nav>
    
        </div>
	);
}

export default AccountSetting;