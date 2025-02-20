import { cva, VariantProps } from 'class-variance-authority';
import { LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { BaseButton } from './base-button';
import { ButtonSize, ButtonVariant } from './types';

const variants = cva<{
    color: Record<ButtonVariant, string>;
}>('border border-border disabled:bg-transparent', {
    variants: {
        color: {
            primary:
                'bg-transparent text-primary hover:border-primary/15 hover:bg-primary/15 active:bg-primary/20',
            danger: 'bg-transparent text-danger hover:border-danger/15 hover:bg-danger/15 active:bg-danger/20',
            neutral: 'bg-transparent text-foreground hover:bg-muted/40 active:bg-muted/60',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

type OutlinedButtonProps = {
    icon?: React.ElementType<LucideProps>;
    text?: string;
    loading?: boolean;
    size?: ButtonSize;
} & Omit<React.ComponentProps<'button'>, 'children'> &
    VariantProps<typeof variants>;

export const OutlinedButton = forwardRef<HTMLButtonElement, OutlinedButtonProps>(
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
