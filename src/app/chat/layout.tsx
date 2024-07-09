import {
	ChatSider,
	PromptForm,
	RightSidebar,
	Navigation,
	UserProfile,
} from "@/components";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatProvider from "@/context/chat.context";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Navigation />
			{/* MAIN CONTENT */}
			<ChatSider />
			{/* CHATBOX */}
			<ChatProvider>
				<div className="h-full relative grid gap-2 p-1 md:grid-cols-12">
					<ScrollArea className="col-span-9 gap-2 relative bg-slate-900 rounded-md border border-slate-700 pb-24">
						{/* CHAT HEADER */}
						{/* 	<div className="sticky w-full space-x-2 z-10 left-0 top-0 bg-slate-950 rounded-b-md p-3 h-14 flex justify-between items-center"> */}
						{/* CHAT MENU SCAFFOLD */}
						{/* </div> */}
						{/* PROMPT RESULTS */}
						{children}
						{/* PROMPT FORM */}
						<PromptForm />
					</ScrollArea>
					{/* RIGHT SIDEBAR */}
					<RightSidebar />
				</div>
			</ChatProvider>
			<UserProfile />
		</>
	);
}

export default Layout;
