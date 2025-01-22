import { isNotDefined } from '@/utils';
import { forwardRef, useEffect, useMemo, useState } from 'react';
import NumberInput from '../number-input/number-input';
import Slider from '../ui/slider';

type RangeInputProps = Omit<React.ComponentProps<typeof Slider>, 'ref'>;

const RangeInput = forwardRef<HTMLInputElement, RangeInputProps>(
    ({ min = 0, max = 100, ...props }, ref) => {
        const [value, setValue] = useState<number[]>(props.defaultValue ?? [max]);

        const minValue = useMemo(() => {
            return value.length === 2 ? value[0] : min;
        }, [value]);

        const maxValue = useMemo(() => {
            if (value.length === 2) {
                return value[1];
            }

            if (value.length === 1) {
                return value[0];
            }

            return max;
        }, [value]);

        useEffect(() => {
            if (isNotDefined(props.value) || props.value.length === 0) {
                return;
            }

            setValue(props.value);
        }, [props.value]);

        const getRangeEdgeLimit = (rangeEdge: 'min' | 'max') => {
            const step = props.step ?? 1;
            const distance = props.minStepsBetweenThumbs ? props.minStepsBetweenThumbs * step : 0;

            switch (rangeEdge) {
                case 'min':
                    return minValue + distance;
                case 'max':
                    return maxValue - distance;
                default:
                    throw new Error('Unknown range edge type');
            }
        };

        return (
            <div className="flex flex-col gap-2">
                <Slider
                    {...props}
                    min={min}
                    max={max}
                    ref={ref}
                    value={value}
                    onValueChange={(val) => {
                        setValue(val);
                        props.onValueChange?.(val);
                    }}
                />
                <div className="flex items-center gap-2">
                    {value.length >= 2 ? (
                        <NumberInput
                            min={min}
                            max={getRangeEdgeLimit('max')}
                            step={props.step}
                            disabled={props.disabled}
                            value={minValue}
                            onValueChange={(newMinValue) => {
                                if (isNotDefined(newMinValue) || value.length < 2) {
                                    return;
                                }

                                setValue((value) => [newMinValue, value[1]]);
                            }}
                        />
                    ) : null}
                    <NumberInput
                        min={getRangeEdgeLimit('min')}
                        max={max}
                        step={props.step}
                        disabled={props.disabled}
                        value={maxValue}
                        onValueChange={(newMaxValue) => {
                            if (isNotDefined(newMaxValue)) {
                                return;
                            }

                            setValue((value) =>
                                value.length < 2 ? [newMaxValue] : [value[0], newMaxValue]
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
);

RangeInput.displayName = 'RangeInput';

export default RangeInput;
