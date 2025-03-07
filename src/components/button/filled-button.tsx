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
                'bg-primary text-on-primary enabled:hover:border-on-primary/10 enabled:active:border-on-primary/0 enabled:hover:before:bg-on-primary/10 enabled:active:before:bg-on-primary/0',
            danger: 'bg-danger text-on-danger enabled:hover:border-on-danger/10 enabled:active:border-on-danger/0 enabled:hover:before:bg-on-danger/10 enabled:active:before:bg-on-danger/0',
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
            <ButtonBase
                {...props}
                ref={ref}
                size={size}
                className={variants({ color, className })}
            />
        );
    }
);
