"use client";
import React, { PropsWithChildren } from "react";

export const ChatContext = React.createContext({});
const ChatProvider = ({ children }: PropsWithChildren) => {
	/* properties to be available in all children of the chat */
	const value = {};
	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
