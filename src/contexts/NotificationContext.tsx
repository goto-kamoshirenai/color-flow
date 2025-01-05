"use client";

import { NotificationType } from "@/types/notification";
import React, { createContext, useCallback, useState } from "react";

interface NotificationMessage {
	message: string;
	type: NotificationType;
	id: number;
}

interface NotificationContextType {
	notifications: NotificationMessage[];
	showNotification: (message: string, type: NotificationType) => void;
	removeNotification: (id: number) => void;
}

export const NotificationContext =
	createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [notifications, setNotifications] = useState<NotificationMessage[]>([]);

	const showNotification = useCallback(
		(message: string, type: NotificationType) => {
			const id = Date.now();
			setNotifications((prev) => [...prev, { message, type, id }]);

			// 3秒後に自動的に通知を消す
			setTimeout(() => {
				setNotifications((prev) =>
					prev.filter((notification) => notification.id !== id)
				);
			}, 3000);
		},
		[]
	);

	const removeNotification = useCallback((id: number) => {
		setNotifications((prev) =>
			prev.filter((notification) => notification.id !== id)
		);
	}, []);

	return (
		<NotificationContext.Provider
			value={{ notifications, showNotification, removeNotification }}
		>
			{children}
		</NotificationContext.Provider>
	);
};
