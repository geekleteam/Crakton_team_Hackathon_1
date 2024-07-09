"use client";
import { v4 as uuidv4 } from "uuid";

export const messages = [
	{
		id: uuidv4(),
		content: "Hello, how can I help you?",
		timestamp: "2022-01-01T10:00:00",
	},
	{
		id: uuidv4(),
		content: "I need help with my code.",
		timestamp: "2022-01-01T10:01:00",
	},
	{
		id: uuidv4(),
		content: "Sure, what seems to be the problem?",
		timestamp: "2022-01-01T10:02:00",
	},
	{
		id: uuidv4(),
		content: "I'm getting an error message when I try to run my code.",
		timestamp: "2022-01-01T10:03:00",
	},
	{
		id: uuidv4(),
		content: "Let me take a look at the error message.",
		timestamp: "2022-01-01T10:04:00",
	},
];
