import { cva, VariantProps } from 'class-variance-authority';
import { LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { BaseButton } from './base-button';
import { ButtonSize, ButtonVariant } from './types';

const variants = cva<{
    color: Record<ButtonVariant, string>;
}>('disabled:bg-transparent', {
    variants: {
        color: {
            primary: 'bg-transparent text-primary hover:bg-primary/15 active:bg-primary/20',
            danger: 'bg-transparent text-danger hover:bg-danger/15 active:bg-danger/20',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

type GhostButtonProps = {
    icon?: React.ElementType<LucideProps>;
    text?: string;
    loading?: boolean;
    size?: ButtonSize;
} & Omit<React.ComponentProps<'button'>, 'children'> &
    VariantProps<typeof variants>;

export const GhostButton = forwardRef<HTMLButtonElement, GhostButtonProps>(
    ({ color, size, className, ...props }, ref) => {
        return (
            <BaseButton
                {...props}
                ref={ref}
                size={size}
                className={variants({ color, className })}
            />
        );
    }
);
