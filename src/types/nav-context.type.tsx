export type TNavContext = {
	navProps: {
		openChatSidebar: boolean;
		openUserProfile: boolean;
		chatTitle: string;
	};
	closeChatSidebar: () => void;
	toggleChatSidebar: () => void;
	setChatTitle: (title: string) => void;
	closeUserProfile: () => void;
	toggleUserProfile: () => void;
};
