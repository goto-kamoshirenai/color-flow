import { LocaleProvider } from "@/contexts/LocaleContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { Notification } from "@/components/elements/Notification";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LocaleProvider>
			<NotificationProvider>
				{children}
				<Notification />
			</NotificationProvider>
		</LocaleProvider>
	);
};

export default Layout;
