import React from "react";

/**
 * カラーパレットのカラーを表示するコンポーネント
 * @param hex カラーの16進数コード
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
