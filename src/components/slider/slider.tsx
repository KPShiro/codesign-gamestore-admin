import { cn } from '@/utils';
import * as RadixSlider from '@radix-ui/react-slider';
import { forwardRef } from 'react';

const SliderTrack = ({
    children,
    className,
    ...props
}: React.ComponentProps<typeof RadixSlider.Track>) => {
    return (
        <RadixSlider.Track
            {...props}
            className={cn('bg-on-surface/10 relative h-1 flex-grow-[1] rounded-full', className)}
        >
            {children}
        </RadixSlider.Track>
    );
};

const SliderRange = ({ className, ...props }: React.ComponentProps<typeof RadixSlider.Range>) => {
    return (
        <RadixSlider.Range
            {...props}
            className={cn('bg-primary absolute h-full rounded-full', className)}
        />
    );
};

const SliderThumb = ({ className, ...props }: React.ComponentProps<typeof RadixSlider.Thumb>) => {
    return (
        <RadixSlider.Thumb
            {...props}
            className={cn(
                'border-primary bg-surface-container focus-visible:outline-primary/15 relative block size-4 rounded-full border-2 outline-4 outline-transparent transition-all',
                className
            )}
        />
    );
};

const Slider = forwardRef<HTMLInputElement, React.ComponentProps<typeof RadixSlider.Root>>(
    ({ className, ...props }, ref) => {
        return (
            <RadixSlider.Root
                {...props}
                ref={ref}
                className={cn(
                    'relative flex h-3 touch-none items-center select-none',
                    props.disabled && 'opacity-disabled',
                    className
                )}
            >
                <SliderTrack>
                    <SliderRange />
                </SliderTrack>
                {(props.value ?? props.defaultValue)?.map((_, index) => (
                    <SliderThumb key={index} />
                ))}
            </RadixSlider.Root>
        );
    }
);

export default Slider;
