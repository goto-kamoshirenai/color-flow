import { useLocale } from "@/contexts/LocaleContext";
import { useNotification } from "@/hooks/useNotification";
import useColorStore from "@/store/useColorStore";
import convert from "color-convert";
import { BiCopy } from "react-icons/bi";

const ColorCodePallet = () => {
	const { showNotification } = useNotification();
	const { t } = useLocale();
	const { choiceColor } = useColorStore();
	const colorCodeStyle = "w-28";
	const colorCodeStyle2 = "w-12";
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

	return (
		<div className="flex flex-col">
			{!choiceColor && (
				<p className="text-center text-gray-500">{t("NO_COLOR")}</p>
			)}
			<div className="flex items-center gap-2">
				<p className={colorCodeStyle2}>HEX</p>
				<p className={colorCodeStyle}>{`: ${baseHex.hex}`}</p>
				<button onClick={() => copyToClipboard(baseHex.hex)}>
					<BiCopy />
				</button>
			</div>
			<div className="flex items-center gap-2">
				<p className={colorCodeStyle2}>RGB</p>
				<p className={colorCodeStyle}>{`: ${baseHex.rgb.join(", ")}`}</p>
				<button onClick={() => copyToClipboard(baseHex.rgb.join(", "))}>
					<BiCopy />
				</button>
			</div>
			<div className="flex items-center gap-2">
				<p className={colorCodeStyle2}>CMYK</p>
				<p className={colorCodeStyle}>{`: ${baseHex.cmyk.join(", ")}`}</p>
				<button onClick={() => copyToClipboard(baseHex.cmyk.join(", "))}>
					<BiCopy />
				</button>
			</div>
			<div className="flex items-center gap-2">
				<p className={colorCodeStyle2}>HSL</p>
				<p className={colorCodeStyle}>{`: ${baseHex.hsl.join(", ")}`}</p>
				<button onClick={() => copyToClipboard(baseHex.hsl.join(", "))}>
					<BiCopy />
				</button>
			</div>
			<div className="flex items-center gap-2">
				<p className={colorCodeStyle2}>HSV</p>
				<p className={colorCodeStyle}>{`: ${baseHex.hsv.join(", ")}`}</p>
				<button onClick={() => copyToClipboard(baseHex.hsv.join(", "))}>
					<BiCopy />
				</button>
			</div>
		</div>
	);
};

export default ColorCodePallet;
