"use client";
import useAuth from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
	const router = useRouter();

	const {isLoggedIn }= useAuth()

	
	React.useEffect(() => {
		if(!isLoggedIn){
			router.push('/login')
		}

		else router.replace("/chat");
	});
	return <></>;
}
