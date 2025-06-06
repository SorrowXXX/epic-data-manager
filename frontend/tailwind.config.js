module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                jetbrains: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
}