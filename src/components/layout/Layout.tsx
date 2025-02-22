"use client";

import { LocaleProvider } from "@/contexts/LocaleContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { Notification } from "@/components/elements/Notification";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Image from "next/image";

export const ProviderWrapper = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<LocaleProvider>
			<NotificationProvider>
				<Layout>{children}</Layout>
				<Notification />
			</NotificationProvider>
		</LocaleProvider>
	);
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	if (showSplash) {
		return (
			<div className="fixed inset-0 flex items-center justify-center bg-white z-50">
				<div className="animate-fade-out animate-glow">
					<Image
						src="/big-logo.svg"
						alt="Color Flow"
						width={200}
						height={200}
						priority
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="w-screen">
			<Header />
			<div className="mt-8 p-2">{children}</div>
		</div>
	);
};
