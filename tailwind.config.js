/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',

                border: 'hsl(var(--border))',

                muted: 'hsl(var(--muted))',
                'muted-foreground': 'hsl(var(--muted-foreground))',

                primary: 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',

                secondary: 'hsl(var(--secondary))',
                'secondary-foreground': 'hsl(var(--secondary-foreground))',

                destructive: 'hsl(var(--destructive))',
                'destructive-foreground': 'hsl(var(--destructive-foreground))',
            },
            borderWidth: {
                DEFAULT: 'var(--border-width)',
            },
            borderColor: {
                DEFAULT: 'hsl(var(--border))',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
        },
    },
    plugins: [],
};
