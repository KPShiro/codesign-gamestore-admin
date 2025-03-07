import { forwardRef } from 'react';
import Input from './input';

type TextInputProps = {
    value?: string;
    onValueChange?: (value: string) => void;
    invalid?: boolean;
} & Omit<React.ComponentProps<typeof Input>, 'value' | 'type' | 'onValueChange'>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ value, onValueChange, invalid = false, ...props }, ref) => {
        const handleOnChange = (value: React.ComponentProps<typeof Input>['value']) => {
            onValueChange?.(value ? String(value) : '');
        };

        return (
            <Input
                {...props}
                ref={ref}
                type="text"
                inputMode="text"
                value={value}
                onValueChange={handleOnChange}
                invalid={invalid}
            />
        );
    }
);

TextInput.displayName = 'TextInput';

export default TextInput;
