import { forwardRef } from 'react';
import Input from './input';

type NumberInputProps = {
    value?: number | undefined;
    onValueChange?: (value: number | undefined) => void;
    invalid?: boolean;
} & Omit<
    React.ComponentProps<'input'>,
    'type' | 'inputMode' | 'autoComplete' | 'value' | 'defaultValue'
>;

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    ({ value, onValueChange, invalid = false, ...inputProps }, ref) => {
        const handleOnChange = (value: React.ComponentProps<typeof Input>['value']) => {
            onValueChange?.(value ? Number(value) : undefined);
        };

        return (
            <Input
                {...inputProps}
                ref={ref}
                type="number"
                inputMode="decimal"
                autoComplete="off"
                value={value}
                onValueChange={handleOnChange}
                invalid={invalid}
            />
        );
    }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
