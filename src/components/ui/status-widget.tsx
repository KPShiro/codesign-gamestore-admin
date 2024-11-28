import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva('inline-flex cursor-default items-center rounded-full border px-2.5 h-6', {
    variants: {
        variant: {
            filled: '',
            outlined: '',
        },
        color: {
            muted: 'bg-muted text-muted-foreground',
            primary: 'bg-primary text-primary-foreground',
            success: 'bg-success text-success-foreground',
            warning: 'bg-warning text-warning-foreground',
            danger: 'bg-danger text-danger-foreground',
        },
    },
    defaultVariants: {
        variant: 'filled',
        color: 'muted',
    },
    compoundVariants: [
        {
            variant: 'filled',
            color: ['muted', 'primary', 'success', 'warning', 'danger'],
            className: 'border-transparent',
        },
        {
            variant: 'outlined',
            color: ['muted', 'primary', 'success', 'warning', 'danger'],
            className: 'bg-transparent',
        },
        {
            variant: 'outlined',
            color: 'muted',
            className: 'text-muted-foreground border-muted-foreground/30',
        },
        {
            variant: 'outlined',
            color: 'primary',
            className: 'text-primary border-primary/30',
        },
        {
            variant: 'outlined',
            color: 'success',
            className: 'text-success border-success/30',
        },
        {
            variant: 'outlined',
            color: 'warning',
            className: 'text-warning border-warning/30',
        },
        {
            variant: 'outlined',
            color: 'danger',
            className: 'text-danger border-danger/30',
        },
    ],
});

export type StatusWidgetProps = React.ComponentPropsWithoutRef<'div'> &
    VariantProps<typeof variants> & {
        text: string;
    };

const StatusWidget = ({ variant, color, text, className, ...props }: StatusWidgetProps) => {
    return (
        <div
            {...props}
            title={props.title ?? text}
            className={cn(variants({ variant, color }), className)}
        >
            <div className="truncate text-xs font-medium">{text}</div>
        </div>
    );
};

export default StatusWidget;
