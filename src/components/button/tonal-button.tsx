import { cva, VariantProps } from 'class-variance-authority';
import { LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { ButtonBase } from './button-base';
import { ButtonSize, ButtonVariant } from './types';

const variants = cva<{
    color: Record<ButtonVariant, string>;
}>('relative before:content-[""] before:absolute before:inset-0 overflow-clip', {
    variants: {
        color: {
            primary:
                'bg-primary-container text-on-primary-container enabled:hover:border-on-primary-container/5 enabled:active:border-on-primary-container/0 enabled:hover:before:bg-on-primary-container/5 enabled:active:before:bg-on-primary-container/0',
            danger: 'bg-danger-container text-on-danger-container enabled:hover:border-on-danger-container/5 enabled:active:border-on-danger-container/0 enabled:hover:before:bg-on-danger-container/5 enabled:active:before:bg-on-danger-container/0',
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
            <ButtonBase
                {...props}
                ref={ref}
                size={size}
                className={variants({ color, className })}
            />
        );
    }
);
