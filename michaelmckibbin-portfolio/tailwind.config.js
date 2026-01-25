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
                accent: "var(--accent)",
                /* To use in components e.g., className="bg-accent text-foreground" */
                accent_light: "var(--accent-light)",
            },
        },
    },
    plugins: [],
};
