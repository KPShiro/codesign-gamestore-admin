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
            className={cn('relative h-1 flex-grow-[1] rounded-full bg-muted', className)}
        >
            {children}
        </RadixSlider.Track>
    );
};

const SliderRange = ({ className, ...props }: React.ComponentProps<typeof RadixSlider.Range>) => {
    return (
        <RadixSlider.Range
            {...props}
            className={cn('absolute h-full rounded-full bg-primary', className)}
        />
    );
};

const SliderThumb = ({ className, ...props }: React.ComponentProps<typeof RadixSlider.Thumb>) => {
    return (
        <RadixSlider.Thumb
            {...props}
            className={cn(
                'relative block size-4 rounded-full border-4 border-primary bg-background outline outline-4 outline-transparent transition-all focus-visible:outline-primary/25',
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
                    'relative flex h-3 touch-none select-none items-center',
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
