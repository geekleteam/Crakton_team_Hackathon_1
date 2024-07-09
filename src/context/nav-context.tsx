"use client";

import { TNavContext } from "@/types/nav-context.type";
import React, { PropsWithChildren } from "react";

export const NavContext = React.createContext<TNavContext>({
	navProps: { openChatSidebar: false, openUserProfile: false, chatTitle: "" },
	closeChatSidebar: () => {},
	toggleChatSidebar: () => {},
	closeUserProfile: () => {},
	toggleUserProfile: () => {},
	setChatTitle: function (title: string): void {
		throw new Error("Function not implemented.");
	},
});

function NavProvider({ children }: PropsWithChildren) {
	const [navProps, setNavProps] = React.useState({
		openChatSidebar: false,
		openUserProfile: false,
		chatTitle: "Untitled Chat",
	});
	function closeUserProfile() {
		setNavProps((prev) => ({ ...prev, openUserProfile: false }));
	}
	function toggleUserProfile() {
		setNavProps((prev) => ({
			...prev,
			openUserProfile: !prev.openUserProfile,
		}));
	}
	function closeChatSidebar() {
		setNavProps((prev) => ({ ...prev, openChatSidebar: false }));
	}
	function toggleChatSidebar() {
		setNavProps((prev) => ({
			...prev,
			openChatSidebar: !prev.openChatSidebar,
		}));
	}
	function setChatTitle(title: string) {
		setNavProps((prev) => ({ ...prev, chatTitle: title }));
	}
	/* properties to be available in all children of the navigation */
	const value = {
		navProps,
		closeChatSidebar,
		toggleChatSidebar,
		setChatTitle,
		closeUserProfile,
		toggleUserProfile,
	};
	return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export default NavProvider;
