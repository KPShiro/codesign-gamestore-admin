import { cn } from '@/utils';
import * as RadixLabel from '@radix-ui/react-label';

type FormFieldLabelProps = React.ComponentProps<typeof RadixLabel.Root> & {
    required?: boolean;
};

export const FormFieldLabel = ({ className, children, ...props }: FormFieldLabelProps) => {
    return (
        <RadixLabel.Root
            {...props}
            {...(props.required && { 'aria-required': true })}
            className={cn('flex items-center gap-1 text-xs font-medium', className)}
        >
            <span>{children}</span>
            {props.required ? '*' : null}
        </RadixLabel.Root>
    );
};
