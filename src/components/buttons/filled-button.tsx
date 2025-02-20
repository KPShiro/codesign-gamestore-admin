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
            primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/85',
            danger: 'bg-danger text-danger-foreground hover:bg-danger/90 active:bg-danger/85',
            neutral: 'bg-muted text-foreground hover:bg-muted/80 active:bg-muted/60',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

type FilledButtonProps = {
    icon?: React.ElementType<LucideProps>;
    text?: string;
    loading?: boolean;
    size?: ButtonSize;
} & Omit<React.ComponentProps<'button'>, 'children'> &
    VariantProps<typeof variants>;

export const FilledButton = forwardRef<HTMLButtonElement, FilledButtonProps>(
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
