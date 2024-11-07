import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import React from 'react';

const variants = cva(
    'relative inline-flex min-w-fit flex-shrink-0 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none disabled:opacity-45 disabled:bg-muted-foreground/15 disabled:text-muted-foreground disabled:pointer-events-none ring-offset-background overflow-hidden',
    {
        variants: {
            variant: {
                filled: 'bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary',
                tonal: 'bg-primary/15 text-primary hover:bg-primary/20 active:bg-primary/25',
                outlined:
                    'border hover:text-primary hover:bg-primary/15 disabled:bg-transparent hover:border-primary/25 active:bg-primary/20',
                text: 'text-primary hover:bg-primary/15 disabled:bg-transparent active:bg-primary/20',
            },
            size: {
                xs: 'h-8',
                sm: 'h-9',
                md: 'h-10',
            },
            shape: {
                rectangle: '',
                square: 'aspect-square',
            },
        },
        defaultVariants: {
            variant: 'filled',
            size: 'md',
            shape: 'rectangle',
        },
        compoundVariants: [
            {
                size: 'xs',
                shape: 'rectangle',
                className: 'px-3',
            },
            {
                size: 'sm',
                shape: 'rectangle',
                className: 'px-3',
            },
            {
                size: 'md',
                shape: 'rectangle',
                className: 'px-4',
            },
        ],
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof variants> & {
        loading?: boolean;
        iconLeft?: null | React.ReactNode;
        iconRight?: null | React.ReactNode;
        text?: string;
    };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { text, iconLeft, iconRight, variant, size, shape, className, loading = false, ...props },
        ref
    ) => (
        <button
            {...props}
            disabled={props.disabled}
            className={cn(variants({ variant, size, shape, className }))}
            ref={ref}
        >
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2Icon size={16} className="animate-spin" />
                </div>
            ) : null}
            {text || iconLeft || iconRight ? (
                <div className={cn('flex items-center gap-2', loading && 'opacity-0')}>
                    {iconLeft}
                    {text}
                    {iconRight}
                </div>
            ) : null}
        </button>
    )
);

Button.displayName = 'Button';

export default Button;
