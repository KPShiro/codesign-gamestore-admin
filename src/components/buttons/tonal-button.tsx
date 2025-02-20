import { cva, VariantProps } from 'class-variance-authority';
import { LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { BaseButton } from './base-button';
import { ButtonSize, ButtonVariant } from './types';

const variants = cva<{
    color: Record<ButtonVariant, string>;
}>('', {
    variants: {
        color: {
            primary: 'bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20',
            danger: 'bg-danger/10 text-danger hover:bg-danger/15 active:bg-danger/20',
            neutral: 'bg-muted/40 text-foreground hover:bg-muted/60 active:bg-muted/80',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

type TonalButtonProps = {
    icon?: React.ElementType<LucideProps>;
    text?: string;
    loading?: boolean;
    size?: ButtonSize;
} & Omit<React.ComponentProps<'button'>, 'children'> &
    VariantProps<typeof variants>;

export const TonalButton = forwardRef<HTMLButtonElement, TonalButtonProps>(
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
