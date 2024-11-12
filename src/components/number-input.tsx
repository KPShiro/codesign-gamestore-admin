import Input from '@components/ui/input';
import { forwardRef, useState } from 'react';

type NumberInputProps = Omit<React.ComponentProps<typeof Input>, 'value' | 'type'> & {
    value?: number;
    onValueChange?: (value: number) => void;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({ value, onValueChange, onChange, ...props }, ref) => {
        const [internalValue, setInternalValue] = useState<number>(value ?? 0);

        const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            const newValue: number = +event.target.value;

            setInternalValue(newValue);
            onValueChange?.(newValue);
            onChange?.(event);
        };

        return (
            <Input
                {...props}
                ref={ref}
                type="number"
                value={internalValue}
                onChange={handleOnChange}
            />
        );
    }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

