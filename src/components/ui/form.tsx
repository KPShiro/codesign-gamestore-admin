import { cn } from '@/utils';
import * as RadixLabel from '@radix-ui/react-label';

const FormLabel = ({ className, ...props }: React.ComponentProps<typeof RadixLabel.Root>) => {
    return <RadixLabel.Root {...props} className={cn('text-xs font-medium', className)} />;
};

const FormMessage = ({
    className,
    error,
    ...props
}: React.ComponentProps<'div'> & {
    error?: boolean;
}) => {
    return (
        <div
            {...props}
            className={cn('text-xs text-muted-foreground', error && 'text-danger', className)}
        />
    );
};

type FormFieldProps = React.ComponentProps<'div'>;

const FormField = ({ children, className, ...props }: FormFieldProps) => {
    return (
        <div {...props} className={cn('flex flex-col gap-2', className)}>
            {children}
        </div>
    );
};

FormField.Label = FormLabel;
FormField.Message = FormMessage;

export default FormField;
