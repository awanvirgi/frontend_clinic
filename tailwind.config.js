/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./**/*{html,js}"],
    theme: {
        extend: {
            colors: {
                "main": "#F2459F",
                "second": "#FCDAEC"
            }
        },
    },
    plugins: [],
}

