import { cn } from '@/utils';
import { forwardRef } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <input
            className={cn(
                'bg-input focus-visible:bg-input-focused h-10 w-full rounded border px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props}
            type={props.type || 'text'}
            placeholder={props.placeholder || 'Enter value...'}
        />
    );
});

Input.displayName = 'Input';

export default Input;
