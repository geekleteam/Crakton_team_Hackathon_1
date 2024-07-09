"use client";
import { useNavContext } from "@/hooks/use-navcontext.hook";
import LoggedinUser from './loggedin-view'
import GuestUser from './guest-login-view'

export default function UserProfile() {
	
	const loggedin = true

	return (
		<>
		{ loggedin ?
			<LoggedinUser/>:
			<GuestUser/>
		}
		</>
	);
}
