import { getComplementaryColor } from "@/libs/relation";
import React from "react";

const ColorButton = ({
	onclick,
	bgColor,
	text,
	leftIcon,
	rightIcon,
}: {
	onclick: () => void;
	bgColor: string;
	text?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}) => {
	return (
		<button
			onClick={onclick}
			className="h-10 rounded-lg flex items-center justify-center px-2 font-bold"
			style={{
				backgroundColor: `#${bgColor}`,
				color: `${getComplementaryColor(`#${bgColor}`)}`,
				border: `1px solid ${getComplementaryColor(`#${bgColor}`)}`,
			}}
		>
			<div className="flex items-center gap-2">
				{leftIcon}
				<p>{text}</p>
				{rightIcon}
			</div>
		</button>
	);
};

export default ColorButton;
