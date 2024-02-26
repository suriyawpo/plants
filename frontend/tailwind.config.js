/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: [
                    "Inter",
                    "sans-serif"
                ],
                cookie: ["Cookie"]
            },
            colors: {
                prmy: "#01051e",
                prmylt: "#fofff7",
                secondary: "#0174BE",
                third: "red"
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px"
            }
        }
    },
    plugins: []
};
