/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ink: {
					950: "#05070f",
					900: "#070b16",
					850: "#0a1022",
					800: "#0d1830",
					700: "#122447",
				},
				surface: {
					DEFAULT: "rgba(255,255,255,0.04)",
					2: "rgba(255,255,255,0.06)",
					3: "rgba(255,255,255,0.08)",
				},
				accent: {
					cyan: "#22d3ee",
					purple: "#a855f7",
					pink: "#ec4899",
					lime: "#a3e635",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			boxShadow: {
				md: "0 12px 28px -18px rgb(0 0 0 / 0.9), 0 4px 10px -6px rgb(0 0 0 / 0.5)",
				glow: "0 0 0 1px rgb(255 255 255 / 0.08), 0 20px 60px -25px rgb(34 211 238 / 0.25)",
				glowPurple: "0 0 0 1px rgb(255 255 255 / 0.08), 0 24px 70px -28px rgb(168 85 247 / 0.25)",
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: 0, transform: "translateY(8px)" },
					"100%": { opacity: 1, transform: "translateY(0px)" },
				},
				shimmer: {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "100% 50%" },
				},
			},
			animation: {
				"fade-up": "fade-up 420ms ease-out both",
				shimmer: "shimmer 2.2s ease-in-out infinite",
			},
			backgroundImage: {
				"app-radial":
					"radial-gradient(1000px circle at 10% 10%, rgba(34,211,238,0.12), transparent 45%), radial-gradient(900px circle at 85% 20%, rgba(168,85,247,0.12), transparent 45%), radial-gradient(1000px circle at 55% 90%, rgba(236,72,153,0.10), transparent 50%)",
				"card-radial":
					"radial-gradient(600px circle at 20% 10%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(700px circle at 80% 30%, rgba(168,85,247,0.12), transparent 55%)",
			},
		},
	},
	plugins: [],
};
