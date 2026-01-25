/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                card: "var(--card)",
                border: "var(--border)",
                muted: "var(--muted)",
                hover: "var(--hover)",
                accent_light: "var(--accent-light)",
            },
        },
    },
    plugins: [],
};
