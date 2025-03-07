import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Badge } from './badge';

const variants = cva('', {
    variants: {
        color: {
            neutral: 'bg-on-surface  text-surface',
            primary: 'bg-primary text-on-primary',
            success: 'bg-success text-on-success',
            warning: 'bg-warning text-on-warning',
            danger: 'bg-danger text-on-danger',
        },
    },
    defaultVariants: {
        color: 'neutral',
    },
});

type FilledBadgeProps = ComponentProps<typeof Badge> & VariantProps<typeof variants>;

export const FilledBadge = ({ text, color, className }: FilledBadgeProps) => {
    return <Badge text={text} className={variants({ color, className })} />;
};
