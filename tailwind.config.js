const colors = require("tailwindcss/colors");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        borderRadius: {
            DEFAULT: ".5rem",
            full: "9999px",
        },
        colors: {
            white: colors.white,
            green: colors.green["500"],
            red: colors.red["500"],
            primary: {
                ["light-3"]: "#9d90d0",
                ["light-2"]: "#8877c5",
                light: "#765dc5",
                DEFAULT: "#694bce",
                dark: "#543ab0",
                ["dark-2"]: "#413489",
                ["dark-3"]: "#2d2d5d",
            },
            gray: {
                ["light-3"]: colors.coolGray["100"],
                ["light-2"]: colors.coolGray["300"],
                light: colors.coolGray["400"],
                DEFAULT: colors.coolGray["600"],
                dark: colors.coolGray["700"],
                ["dark-2"]: colors.coolGray["800"],
                ["dark-3"]: colors.coolGray["900"],
            },
        },
        fontFamily: {
            source: ["Source Sans Pro", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
        },
        // ignore Tailwind's font size so we can use different type scales for small and large devices
        fontSize: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
