import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const FormFieldMessageTypes = ['info', 'error'] as const;
export type FormFieldMessageType = (typeof FormFieldMessageTypes)[number];

const variants = cva<{
    variant: Record<FormFieldMessageType, string>;
}>('text-xs', {
    variants: {
        variant: {
            info: 'text-on-surface/60',
            error: 'text-danger',
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});

type FormFieldMessageProps = React.ComponentProps<'div'> & VariantProps<typeof variants>;

export const FormFieldMessage = ({
    className,
    variant = 'info',
    ...props
}: FormFieldMessageProps) => {
    return <div {...props} className={cn(variants({ variant, className }))} />;
};
