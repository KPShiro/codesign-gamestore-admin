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
            opacity: {
                disabled: 'var(--opacity-disabled)',
            },
            backgroundColor: {
                card: {
                    DEFAULT: 'hsl(var(--color-card-background))',
                },
            },
            borderColor: {
                DEFAULT: 'hsl(var(--color-border))',
            },
            borderWidth: {
                DEFAULT: 'var(--width-border)',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
                xl: 'calc(var(--radius) + 0.25rem)',
                lg: 'calc(var(--radius) + 0.125rem)',
                md: 'var(--radius)',
                sm: 'calc(var(--radius) - 0.125rem)',
                xs: 'calc(var(--radius) - 0.25rem)',
            },
            keyframes: {
                'scale-fade-in': {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.8)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                },
                'slide-up': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(10%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
                'slide-right': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(100%)',
                    },
                },
                'slide-down': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-10%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
                'slide-left': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateX(100%)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    },
                },
                'ping-ring': {
                    '0%': {
                        'box-shadow': '0 0 0 0 hsla(var(--color-primary) / 50%)',
                    },
                    '75%, 100%': {
                        'box-shadow': '0 0 0 8px hsla(var(--color-primary) / 0%)',
                    },
                },
            },
            animation: {
                'scale-fade-in': 'scale-fade-in 0.25s ease-in-out',
                'slide-up': 'slide-down 0.25s ease-in-out',
                'slide-right': 'slide-right 0.25s ease-in-out',
                'slide-down': 'slide-down 0.25s ease-in-out',
                'slide-left': 'slide-left 0.25s ease-in-out',
                'ping-ring': 'ping-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite',
            },
        },
    },
    plugins: [],
};

