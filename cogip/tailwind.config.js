/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        `./src/**/*.{js,ts,jsx,tsx,mdx}`,


    ],
    theme: {
        fontFamily: {
            'roboto': ['Roboto', "sans-serif"],
            'assistant': ['Assistant', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                'yellow': '#F9DE4E',
                'lavande': '#9698D6'
            },
            backgroundImage: {
                'rect-17': "url('/src/assets/rect-17.svg')",
            }
        },
    },
    plugins: [],
}

