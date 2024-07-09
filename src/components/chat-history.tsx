"use client";
import { formatTimestamp, shortenString } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	// DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit2, Ellipsis, Share2, Trash2 } from "lucide-react";
import Link from "next/link";
import { useNavContext } from "@/hooks/use-navcontext.hook";

const ChatHistory: React.FC<{
	messages: { content: string; id: string; timestamp: string }[];
}> = ({ messages }) => {
	const navContext = useNavContext();
	return (
		<div className="flex flex-col space-y-4 mt-10">
			{messages.map(({ content, id, timestamp }) => (
				<Link
					onClick={navContext.closeChatSidebar}
					href={"/chat/" + id}
					key={id}
					className="flex p-1 justify-between relative top-0 rounded-md hover:bg-slate-900 items-center space-x-4"
				>
					<div className="flex flex-col">
						<div className="text-slate-400">{shortenString(content)}</div>
						<div className="text-green-700/50 text-xs">
							{formatTimestamp(timestamp)}
						</div>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button className="hover:bg-transparent" variant="ghost">
								<Ellipsis />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-fit">
							{/* <DropdownMenuLabel>Appearance</DropdownMenuLabel>
							<DropdownMenuSeparator /> */}

							<DropdownMenuItem className="flex space-x-2">
								<Edit2 size={14} />
								<DropdownMenuLabel>Rename</DropdownMenuLabel>
							</DropdownMenuItem>
							<DropdownMenuItem className="flex space-x-2">
								<Share2 size={14} />
								<DropdownMenuLabel>Share</DropdownMenuLabel>
							</DropdownMenuItem>
							<DropdownMenuItem className="flex space-x-2 text-red-400">
								<Trash2 size={14} />
								<DropdownMenuLabel>Delete</DropdownMenuLabel>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</Link>
			))}
		</div>
	);
};

export default ChatHistory;
