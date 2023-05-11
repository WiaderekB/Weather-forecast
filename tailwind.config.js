/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			aspectRatio: {
				"9/16": "9/12",
			},
			colors: { darkBlue: "#110e3c", current: "currentColor" },
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			backgroundImage: {
				detailedWeather: 'url("./../public/background.png")',
			},
		},
	},
	plugins: [],
};
