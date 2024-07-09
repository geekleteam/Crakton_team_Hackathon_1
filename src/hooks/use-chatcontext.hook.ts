import { ChatContext } from "@/context/chat.context";
import React from "react";

export const useChatContext = () => React.useContext(ChatContext);
