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
                    'bg-on-surface/2 focus-visible:bg-surface focus-visible:border-primary focus-visible:ring-primary/15 disabled:opacity-disabled h-10 w-full rounded-md border px-3 text-sm focus-visible:ring-3 focus-visible:outline-none disabled:pointer-events-none',
                    invalid &&
                        '[&:not(:focus)]:border-danger [&:not(:focus)]:bg-danger/10 ring-danger/15 ring-3',
                    className
                )}
            />
        );
    }
);

Input.displayName = 'Input';

export default Input;
