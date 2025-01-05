import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				main: "#3A8FB7",
				dark: "#22556C",
				accent: "#F4A7B9",
			},
			animation: {
				slideIn: "slide-in 0.3s ease-in-out forwards",
				slideOut: "slide-out 0.3s ease-in-out forwards",
			},
			keyframes: {
				"slide-in": {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"slide-out": {
					"0%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(100%)", opacity: "0" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
