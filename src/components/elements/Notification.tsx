"use client";

import React from "react";
import { useNotification } from "../../hooks/useNotification";
import useColorStore from "@/store/useColorStore";
import { getComplementaryColor } from "@/libs/relation";

export const Notification: React.FC = () => {
	const { notifications, removeNotification } = useNotification();
	const { color } = useColorStore();

	return (
		<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2">
			{notifications.map(({ id, message, type }) => (
				<div
					key={id}
					className={`rounded-md p-4 shadow-lg transition-transform duration-300 transform ${
						type === "success"
							? "bg-green-500"
							: type === "error"
								? "bg-red-500"
								: type === "warning"
									? "bg-yellow-500"
									: "bg-blue-500"
					} text-white animate-slideIn `}
					style={{
						backgroundColor: type === "color" ? `#${color}` : "bg-blue-500",
						color: type === "color" ? getComplementaryColor(`#${color}`) : "",
					}}
				>
					<div className="flex items-center justify-between">
						<span>{message}</span>
						<button
							onClick={() => removeNotification(id)}
							className="ml-4 text-white hover:text-gray-200"
							style={{
								color:
									type === "color" ? getComplementaryColor(`#${color}`) : "",
							}}
						>
							×
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
