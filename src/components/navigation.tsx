"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useNavContext } from "@/hooks/use-navcontext.hook";

const Navigation = () => {
	const { toggleChatSidebar, navProps, toggleUserProfile } = useNavContext();
	return (
		<nav className="flex sticky w-full top-0 z-10 bg-slate-950 justify-between items-center p-1 border-b">
			<div className="flex space-x-2 items-center">
				<Button
					className="flex space-x-2 items-center"
					onClick={toggleChatSidebar}
					variant={"ghost"}
				>
					<Plus />
					<Image
						className="w-10"
						src={"/geekle.gif"}
						alt="geekle_gif"
						width={100}
						height={100}
					/>
				</Button>
				<p>{navProps.chatTitle}</p>
			</div>		
			<Button
				onClick={toggleUserProfile}
				className="flex items-center space-x-2"
				variant={"link"}
			>
				<p>Ali</p>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>AI</AvatarFallback>
				</Avatar>
			</Button>
		</nav>
	);
};

export default React.memo(Navigation);
