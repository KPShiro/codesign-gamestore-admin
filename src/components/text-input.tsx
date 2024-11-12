import Input from '@components/ui/input';
import { forwardRef, useState } from 'react';

type TextInputProps = Omit<React.ComponentProps<typeof Input>, 'value' | 'type'> & {
    value?: string;
    onValueChange?: (value: string) => void;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    ({ value, onValueChange, onChange, ...props }, ref) => {
        const [internalValue, setInternalValue] = useState<string>(value ?? '');

        const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            const newValue: string = event.target.value;

            setInternalValue(newValue);
            onValueChange?.(newValue);
            onChange?.(event);
        };

        return (
            <Input
                {...props}
                ref={ref}
                type="text"
                value={internalValue}
                onChange={handleOnChange}
            />
        );
    }
);

TextInput.displayName = 'TextInput';

export default TextInput;

