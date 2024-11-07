import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva('aspect-square h-1.5 rounded-full', {
    variants: {
        variant: {
            primary: 'bg-primary',
            danger: 'bg-danger',
            muted: 'bg-border',
            success: 'bg-success',
            warning: 'bg-warning',
        },
    },
    defaultVariants: {
        variant: 'muted',
    },
});

export type StatusWidgetIndicatorVariantProps = VariantProps<typeof variants>;

type StatusWidgetIndicatorProps = React.ComponentPropsWithoutRef<'div'> &
    StatusWidgetIndicatorVariantProps;

const StatusWidgetIndicator = ({ variant, className, ...props }: StatusWidgetIndicatorProps) => {
    return <div {...props} className={cn(variants({ variant }), className)}></div>;
};

export default StatusWidgetIndicator;
