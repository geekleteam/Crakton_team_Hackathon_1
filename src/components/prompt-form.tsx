import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Paperclip, Send } from "lucide-react";

export function PromptForm() {
	return (
		<form className="absolute w-full space-x-2 left-0 bottom-0 bg-slate-950 rounded-b-md p-3 h-20 flex justify-between items-center">
			<fieldset className="w-full flex space-x-1 items-center">
				<Textarea
					className="resize-none border-0 p-5"
					placeholder="Chat with AI"
					autoFocus
				/>
				<Button variant={"ghost"}>
					<Paperclip />
				</Button>
				<Button variant={"ghost"}>
					<Mic />
				</Button>
			</fieldset>
			<fieldset>
				<Button className="w-20 bg-emerald-500 hover:bg-emerald-600 text-white">
					<Send />
				</Button>
			</fieldset>
		</form>
	);
}
