import { cn } from '@/utils';
import Icon from '@components/ui/icon';
import { cva, VariantProps } from 'class-variance-authority';
import { LoaderCircleIcon, LucideProps } from 'lucide-react';
import React from 'react';

const variants = cva(
    'relative inline-flex gap-2 min-w-fit flex-shrink-0 items-center justify-center font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none disabled:opacity-disabled disabled:pointer-events-none ring-offset-background border border-transparent',
    {
        variants: {
            variant: {
                filled: 'bg-primary text-primary-foreground hover:bg-primary/85 active:bg-primary',
                tonal: 'bg-primary/15 text-primary hover:bg-primary/20 active:bg-primary/25',
                outlined:
                    'border-border hover:text-primary hover:bg-primary/15 disabled:bg-transparent hover:border-primary/25 active:bg-primary/20',
                text: 'text-foreground hover:text-primary hover:bg-primary/15 disabled:bg-transparent active:bg-primary/20',
            },
            size: {
                xs: 'h-6 px-1.5 text-xs rounded-sm',
                sm: 'h-8 px-3 text-xs rounded-sm',
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
        ping?: boolean;
        icon?: React.ElementType<LucideProps>;
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
            ping = false,
            ...props
        },
        ref
    ) => {
        return (
            <button
                {...props}
                disabled={props.disabled}
                className={cn(
                    variants({ variant, size, className }),
                    icon && 'aspect-square px-0',
                    'relative'
                )}
                ref={ref}
                title={text ?? props.title}
            >
                {ping ? (
                    <div className="absolute inset-0 animate-ping-ring rounded-[inherit]"></div>
                ) : null}
                {loading ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Icon icon={LoaderCircleIcon} className="animate-spin" />
                    </div>
                ) : null}
                {icon ? (
                    <Icon
                        icon={icon}
                        size={size === 'xs' ? 12 : 16}
                        strokeWidth={size === 'xs' ? 1.25 : 1.5}
                        className={cn(loading && 'opacity-0')}
                    />
                ) : null}
                {text && !icon ? <div className={cn(loading && 'opacity-0')}>{text}</div> : null}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
