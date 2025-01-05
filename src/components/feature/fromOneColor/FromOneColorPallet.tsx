"use client";

import React, { useState } from "react";
import MultipleInput from "@/components/elements/input/MultipleInput";
const FromOneColorPallet = () => {
	const [color, setColor] = useState<string>("");
	return (
		<div className="flex flex-col gap-4 p-4">
			<MultipleInput color={color} setColor={setColor} />
		</div>
	);
};

export default FromOneColorPallet;
