import { cn } from '@/utils';
import Icon, { IconName } from '@components/icon';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva(
    'relative inline-flex gap-2 min-w-fit flex-shrink-0 items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none disabled:opacity-45 disabled:bg-muted-foreground/15 disabled:text-muted-foreground disabled:pointer-events-none ring-offset-background overflow-hidden border border-transparent',
    {
        variants: {
            variant: {
                filled: 'bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary',
                tonal: 'bg-primary/15 text-primary hover:bg-primary/20 active:bg-primary/25',
                outlined:
                    'border-border hover:text-primary hover:bg-primary/15 disabled:bg-transparent hover:border-primary/25 active:bg-primary/20',
                text: 'text-primary hover:bg-primary/15 disabled:bg-transparent active:bg-primary/20',
            },
            size: {
                xs: 'h-8 px-3 text-xs rounded-sm',
                sm: 'h-9 px-3.5 text-sm rounded-sm',
                md: 'h-10 px-4 text-sm rounded-md',
            },
        },
        defaultVariants: {
            variant: 'filled',
            size: 'md',
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof variants> & {
        loading?: boolean;
        icon?: IconName;
        text?: string;
    };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            text,
            icon = undefined,
            variant = 'filled',
            size = 'md',
            className,
            loading = false,
            ...props
        },
        ref
    ) => (
        <button
            {...props}
            disabled={props.disabled}
            className={cn(variants({ variant, size, className }), icon && 'aspect-square px-0')}
            ref={ref}
            title={text ?? props.title}
        >
            {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                        name="loader-circle"
                        size={16}
                        strokeWidth={1.5}
                        absoluteStrokeWidth
                        className="animate-spin"
                    />
                </div>
            ) : null}
            {icon ? (
                <Icon
                    name={icon}
                    size={14}
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                    className={cn(loading && 'opacity-0')}
                />
            ) : null}
            {text && !icon ? <div className={cn(loading && 'opacity-0')}>{text}</div> : null}
        </button>
    )
);

Button.displayName = 'Button';

export default Button;
