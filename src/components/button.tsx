/* eslint-disable react/prop-types */
import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { LoaderIcon } from 'lucide-react';
import React from 'react';

const variants = cva(
    'relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/60',
                danger: 'bg-danger text-danger-foreground hover:bg-danger/90',
                outlined: 'border hover:text-primary hover:bg-primary/10',
                ghost: 'hover:text-primary hover:bg-primary/10',
                link: 'underline-offset-4 hover:underline text-primary',
            },
            size: {
                sm: 'h-9',
                md: 'h-10',
            },
            shape: {
                rectangle: '',
                square: 'aspect-square',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md',
            shape: 'rectangle',
        },
        compoundVariants: [
            {
                size: 'md',
                shape: 'rectangle',
                className: 'px-4',
            },
            {
                size: 'sm',
                shape: 'rectangle',
                className: 'px-3',
            },
        ],
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof variants> & {
        loading?: boolean;
    };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant, size, shape, className, loading = false, ...props }, ref) => (
        <button
            {...props}
            disabled={props.disabled || loading}
            className={cn(variants({ variant, size, shape, className }))}
            ref={ref}
        >
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <LoaderIcon size={16} className="animate-spin" />
                </div>
            ) : null}
            <div className={cn(loading && 'opacity-0')}>{children}</div>
        </button>
    )
);

Button.displayName = 'Button';

export default Button;
