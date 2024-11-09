import { cn } from '@/utils';
import { forwardRef, useState } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    const [value, setValue] = useState<typeof props.value>(props.value ?? '');

    return (
        <input
            className={cn(
                'h-10 rounded border px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                props.onChange?.(e);
            }}
            type={props.type ?? 'text'}
        />
    );
});

Input.displayName = 'Input';

export default Input;
