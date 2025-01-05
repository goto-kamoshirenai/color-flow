"use client";

import React from "react";
import MultipleInput from "@/components/elements/input/MultipleInput";
import useColorStore from "@/store/useColorStore";
import ColorCodePallet from "@/components/elements/pallet/ColorCodePallet";

const FromOneColorPallet = () => {
	const { color, setColor } = useColorStore();

	return (
		<div className="flex justify-center items-center gap-2 ">
			<MultipleInput setColor={setColor} />
			{color && <ColorCodePallet />}
		</div>
	);
};

export default FromOneColorPallet;
