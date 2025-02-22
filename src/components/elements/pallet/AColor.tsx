import React from "react";

/**
 * カラーパレットのカラーを表示するコンポーネント
 * @param hex カラーの16進数コード
 * @param w 幅
 * @param h 高さ
 * @returns
 */
const AColor = ({ hex, w, h }: { hex: string; w: number; h: number }) => {
	return (
		<div
			className={`w-${w} h-${h} rounded-lg`}
			style={{ backgroundColor: hex }}
		></div>
	);
};

export default AColor;
