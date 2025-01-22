import { cn } from '@/utils';
import { FormFieldLabel } from './form-field-label';
import { FormFieldMessage } from './form-field-message';

type FormFieldProps = React.ComponentProps<'div'>;

export const FormField = ({ children, className, ...props }: FormFieldProps) => {
    return (
        <div {...props} className={cn('flex flex-col gap-2', className)}>
            {children}
        </div>
    );
};

FormField.Label = FormFieldLabel;
FormField.Message = FormFieldMessage;
