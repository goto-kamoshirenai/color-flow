"use client";

import React, { useState, useEffect, useRef } from "react";
import { libraryData } from "@/consts/libraryData";
import { useNotification } from "@/hooks/useNotification";
import { BiCopy } from "react-icons/bi";

const FivePallet = ({ id }: { id: number }) => {
	const { showNotification } = useNotification();
	const colors = [
		libraryData[id].color1,
		libraryData[id].color2,
		libraryData[id].color3,
		libraryData[id].color4,
		libraryData[id].color5,
	];

	const [selectedColor, setSelectedColor] = useState<string | null>(null);
	const tooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				tooltipRef.current &&
				!tooltipRef.current.contains(event.target as Node)
			) {
				setSelectedColor(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleColorClick = (color: string) => {
		setSelectedColor(color === selectedColor ? null : color);
	};

	const handleCopyClick = async (color: string) => {
		try {
			await navigator.clipboard.writeText(color);
			showNotification(`${color}をコピーしました!`, "success");
		} catch (err) {
			const errorMessage = err as string;
			showNotification(errorMessage, "error");
		}
	};

	return (
		<div className="border-gray-100 rounded-lg">
			<div className="flex flex-row">
				{colors.map((color, index) => (
					<div key={index} className="flex flex-col items-center relative">
						<div
							onClick={() => handleColorClick(color ?? "")}
							style={{ backgroundColor: color }}
							className="w-10 h-10 cursor-pointer"
						/>
						{selectedColor === color && (
							<div
								ref={tooltipRef}
								style={{ borderColor: color }}
								className="absolute top-full mt-1 bg-white shadow rounded-md p-2 flex items-center gap-2 z-10 border"
							>
								<span className="text-xs">{color}</span>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleCopyClick(color);
									}}
									className="text-gray-600 hover:text-gray-800"
								>
									<BiCopy size={16} />
								</button>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FivePallet;
