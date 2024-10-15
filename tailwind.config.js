/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                border: 'hsl(var(--color-border))',
                background: 'hsl(var(--color-background))',
                foreground: 'hsl(var(--color-foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--color-primary))',
                    foreground: 'hsl(var(--color-primary-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--color-success))',
                    foreground: 'hsl(var(--color-success-foreground))',
                },
                warning: {
                    DEFAULT: 'hsl(var(--color-warning))',
                    foreground: 'hsl(var(--color-warning-foreground))',
                },
                danger: {
                    DEFAULT: 'hsl(var(--color-danger))',
                    foreground: 'hsl(var(--color-danger-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--color-muted))',
                    foreground: 'hsl(var(--color-muted-foreground))',
                },
            },
            borderColor: {
                DEFAULT: 'var(--color-border)',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                xl: 'calc(var(--radius) + 0.5rem)',
                lg: 'calc(var(--radius) + 0.25rem)',
                md: 'var(--radius)',
                sm: 'calc(var(--radius) - 0.25rem)',
                xs: 'calc(var(--radius) - 0.5rem)',
            },
        },
    },
    plugins: [],
};
