import { cn } from '@/utils';
import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean;
    onValueChange?: (value: React.InputHTMLAttributes<HTMLInputElement>['value']) => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, invalid, onValueChange, ...props }, ref) => {
        const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            onValueChange?.(event.target.value);
            props.onChange?.(event);
        };

        return (
            <input
                {...props}
                {...(invalid && { 'aria-invalid': true })}
                ref={ref}
                type={props.type || 'text'}
                placeholder={props.placeholder || 'Enter value...'}
                onChange={handleOnChange}
                className={cn(
                    'h-10 w-full rounded-md border bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-disabled',
                    invalid &&
                        'focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-2 [&:not(:focus)]:border-danger [&:not(:focus)]:bg-danger/5',
                    className
                )}
            />
        );
    }
);

Input.displayName = 'Input';

export default Input;
