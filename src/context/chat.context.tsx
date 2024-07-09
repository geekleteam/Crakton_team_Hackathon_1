"use client";
import React, { PropsWithChildren, useState } from "react";

export const ChatContext = React.createContext({
	chatData:[],
 	setChatData: (data) => {},
});
const ChatProvider = ({ children }: PropsWithChildren) => {
	const [chatData, setChatData]= useState([])
	/* properties to be available in all children of the chat */
	const value = {
		chatData,
		 setChatData

	};
	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
