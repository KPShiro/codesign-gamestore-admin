import Input from '@components/ui/input';
import { forwardRef, useState } from 'react';

type NumberInputProps = Omit<React.ComponentProps<typeof Input>, 'value' | 'type' | 'onChange'> & {
    value?: number;
    onValueChange?: (value: number) => void;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({ value, onValueChange, ...props }, ref) => {
        const [internalValue, setInternalValue] = useState<number>(value ?? 0);

        const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            let newValue: number = Number(event.target.value);

            if (props.min) {
                const min: number = Number(props.min);
                newValue = newValue < min ? min : newValue;
            }

            if (props.max) {
                const max: number = Number(props.max);
                newValue = newValue > max ? max : newValue;
            }

            setInternalValue(newValue);
            onValueChange?.(newValue);
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
