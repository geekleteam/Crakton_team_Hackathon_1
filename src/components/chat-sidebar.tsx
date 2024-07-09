"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetClose,
} from "@/components/ui/sheet";
import { useNavContext } from "@/hooks/use-navcontext.hook";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import ChatHistory from "./chat-history";
import { useRouter } from "next/navigation";
import { messages } from "@/lib/samples";

export default function ChatSider() {
	const navContext = useNavContext();
	const router = useRouter();
	return (
		<Sheet
			open={navContext.navProps.openChatSidebar}
			onOpenChange={navContext.toggleChatSidebar}
		>
			<SheetContent side={"left"}>
				<SheetHeader className="space-y-5 mt-3">
					<Button
						onClick={() => {
							router.push("/chat");
							navContext.closeChatSidebar();
						}}
						className="border border-x-green-300"
					>
						<Plus /> <span>New Chat</span>
					</Button>
				</SheetHeader>
				<ChatHistory messages={messages} />
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
