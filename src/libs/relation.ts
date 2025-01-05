import convert from "color-convert";

// hexから補色を求める
export const getComplementaryColor = (hex: string): string => {
	const rgb = convert.hex.rgb(hex); // hexをRGBに変換
	const hsv = convert.hex.hsv(hex); // hexをHSVに変換
	const H = hsv[0];
	const S = hsv[1];
	const V = hsv[2];

	// 無彩色かどうかを判定
	const isAchromatic = S === 0;

	if (isAchromatic) {
		const complementaryV = 100 - V;
		return `#${convert.hsv.hex([H, S, complementaryV])}`;
	} else {
		// RGBで補色を計算
		const complementaryRgb = [255 - rgb[0], 255 - rgb[1], 255 - rgb[2]];
		return `#${convert.rgb.hex(complementaryRgb[0], complementaryRgb[1], complementaryRgb[2])}`;
	}
};

// 元の色と補色の間の色を求める
export const getBetweenColor = (hex: string) => {
	const rgb = convert.hex.rgb(hex);
	const complementaryColor = getComplementaryColor(hex);
	const complementaryRgb = convert.hex.rgb(complementaryColor);
	const betweenColor = convert.rgb.hex(
		(rgb[0] + complementaryRgb[0]) / 2,
		(rgb[1] + complementaryRgb[1]) / 2,
		(rgb[2] + complementaryRgb[2]) / 2
	);
	return betweenColor;
};
