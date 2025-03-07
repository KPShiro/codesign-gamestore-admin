import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { Badge } from './badge';

const variants = cva('', {
    variants: {
        color: {
            neutral: 'bg-on-surface/5 border-on-surface/10 text-on-surface',
            primary: 'bg-primary/10 border-primary/25 text-primary',
            success: 'bg-success/10 border-success/25 text-success',
            warning: 'bg-warning/10 border-warning/30 text-warning',
            danger: 'bg-danger/10 border-danger/25 text-danger',
        },
    },
    defaultVariants: {
        color: 'neutral',
    },
});

type TonalBadgeProps = ComponentProps<typeof Badge> & VariantProps<typeof variants>;

export const TonalBadge = ({ text, color, className }: TonalBadgeProps) => {
    return <Badge text={text} className={variants({ color, className })} />;
};
