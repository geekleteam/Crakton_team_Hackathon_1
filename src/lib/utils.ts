import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function formatTimestamp(timestamp: string): string {
	const date = new Date(timestamp);
	const now = new Date();

	const timeDiff = now.getTime() - date.getTime();

	const seconds = Math.floor(timeDiff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return `${years} year${years > 1 ? "s" : ""} ago`;
	} else if (months > 0) {
		return `${months} month${months > 1 ? "s" : ""} ago`;
	} else if (weeks > 0) {
		return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
	} else if (days > 0) {
		return `${days} day${days > 1 ? "s" : ""} ago`;
	} else if (hours > 0) {
		return `${hours} hour${hours > 1 ? "s" : ""} ago`;
	} else if (minutes > 0) {
		return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
	} else {
		return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
	}
}
export function shortenString(input: string, length: number = 50): string {
	if (input.length <= length) {
		return input;
	} else {
		return input.slice(0, length) + "...";
	}
}
