"use client";

import { useLocale } from "@/contexts/LocaleContext";
import {
	MultipleInputAreaBoxStyles,
	MultipleInputAreaStyles,
} from "@/styles/global";
import { InputType } from "@/types/input";
import React, { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import ColorButton from "../button/ColorButton";
import useColorStore from "@/store/useColorStore";

const RadioInput = ({
	label,
	value,
	checked,
	onChange,
}: {
	label: string;
	value: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
	<div className="flex items-center gap-2">
		<label className="w-8">{label}</label>
		<input
			type="radio"
			name="inputType"
			value={value}
			checked={checked}
			onChange={onChange}
		/>
	</div>
);

const MultipleInput = ({ setColor }: { setColor: (color: string) => void }) => {
	const { t } = useLocale();
	const { color, setChoiceColor } = useColorStore();
	const [inputType, setInputType] = useState<InputType>("hex");
	const [inputValue, setInputValue] = useState<string>(color);

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputType(e.target.value as InputType);
		setColor("");
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const submitColor = () => {
		setColor(inputValue);
		setChoiceColor(inputValue);
	};

	return (
		<>
			<div className="flex flex-col text-main">
				<RadioInput
					label={t("MULTIPLE_INPUT_TYPE_HEX")}
					value="hex"
					checked={inputType === "hex"}
					onChange={handleRadioChange}
				/>
				<RadioInput
					label={t("MULTIPLE_INPUT_TYPE_RGB")}
					value="rgb"
					checked={inputType === "rgb"}
					onChange={handleRadioChange}
				/>
			</div>
			{inputType === "hex" && (
				<div className={MultipleInputAreaBoxStyles}>
					<input
						type="text"
						value={inputValue}
						placeholder={t("MULTIPLE_INPUT_HEX_PLACEHOLDER")}
						maxLength={6}
						pattern="^[0-9A-Fa-f]{6}$"
						slot="hex"
						onChange={(e) => handleInputChange(e)}
						className={MultipleInputAreaStyles}
					/>
				</div>
			)}
			{inputType === "rgb" && (
				<div className={MultipleInputAreaBoxStyles}>
					<input
						type="text"
						value={inputValue}
						placeholder={t("MULTIPLE_INPUT_RGB_PLACEHOLDER")}
						maxLength={11}
						pattern="^[0-9,]{11}$"
						slot="rgb"
						onChange={(e) => setInputValue(e.target.value)}
						className={MultipleInputAreaStyles}
					/>
				</div>
			)}
			<ColorButton
				onclick={submitColor}
				bgColor={inputValue}
				text={t("BUTTON_GO")}
				rightIcon={<BiRightArrow />}
			/>
		</>
	);
};

export default MultipleInput;
