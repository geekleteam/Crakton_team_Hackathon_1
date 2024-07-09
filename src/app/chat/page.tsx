"use client"
import { TableDemo } from "@/components";
import withAuth from "@/components/with-auth";
import React from "react";

function Chat() {
	return (
		<div className="flex flex-col text-center px-8 items-center justify-center">
			<div className="my-20">
				<h1 className="text-3xl font-bold">Welcome to Geekle AI Chat</h1>
				<p className="text-lg">You can start with these prompts.</p>
			</div>
			<div className="grid grid-cols-6 w-full h-full gap-2 place-items-center content-center items-center">
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
			</div>
		</div>
	);
}

{
	/* <div className="text-sm px-5 bg-slate-900">
	<TableDemo />
</div> */
}

export default withAuth(Chat);
