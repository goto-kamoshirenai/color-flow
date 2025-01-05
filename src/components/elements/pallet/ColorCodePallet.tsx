import { useLocale } from "@/contexts/LocaleContext";
import { useNotification } from "@/hooks/useNotification";
import useColorStore from "@/store/useColorStore";
import convert from "color-convert";
import { BiCopy } from "react-icons/bi";
import AColor from "./AColor";

const ColorCodePallet = () => {
	const { showNotification } = useNotification();
	const { t } = useLocale();
	const { choiceColor } = useColorStore();
	const colorCodeStyle = "w-28";
	const colorCodeStyle2 = "w-12";
	const copyIconStyle =
		"h-6 w-6 text-dark hover:text-accent hover:bg-dark rounded-lg p-1";
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			showNotification(t("COPY_COLOR"), "color");
		});
	};

	const getColorFormats = (color: string) => {
		const hexColor = `#${color}`;
		return {
			hex: hexColor,
			rgb: convert.hex.rgb(hexColor),
			cmyk: convert.rgb.cmyk(convert.hex.rgb(hexColor)),
			hsl: convert.hex.hsl(hexColor),
			hsv: convert.hex.hsv(hexColor),
		};
	};

	const baseHex = getColorFormats(choiceColor);

	const ColorFormatDisplay = ({
		label,
		value,
	}: {
		label: string;
		value: string;
	}) => (
		<div className="flex items-center gap-2">
			<p className={colorCodeStyle2}>{label}</p>
			<p className={colorCodeStyle}>{`: ${value}`}</p>
			<button onClick={() => copyToClipboard(value)}>
				<BiCopy className={copyIconStyle} />
			</button>
		</div>
	);

	return (
		<div className="flex flex-col items-center gap-2">
			{!choiceColor && (
				<p className="text-center text-gray-500">{t("NO_COLOR")}</p>
			)}
			{choiceColor && <AColor hex={baseHex.hex} h={10} w={32} />}
			<ColorFormatDisplay label="HEX" value={baseHex.hex} />
			<ColorFormatDisplay label="RGB" value={baseHex.rgb.join(", ")} />
			<ColorFormatDisplay label="CMYK" value={baseHex.cmyk.join(", ")} />
			<ColorFormatDisplay label="HSL" value={baseHex.hsl.join(", ")} />
			<ColorFormatDisplay label="HSV" value={baseHex.hsv.join(", ")} />
		</div>
	);
};

export default ColorCodePallet;
