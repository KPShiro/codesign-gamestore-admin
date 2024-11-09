import { cn } from '@/utils';
import * as RadixSlider from '@radix-ui/react-slider';

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
                'block aspect-square h-3 rounded-full bg-primary outline outline-4 outline-white',
                className
            )}
        />
    );
};

const Slider = ({ className, ...props }: React.ComponentProps<typeof RadixSlider.Root>) => {
    return (
        <RadixSlider.Root
            {...props}
            className={cn('relative flex h-3 touch-none select-none items-center', className)}
        >
            <SliderTrack>
                <SliderRange />
            </SliderTrack>
            <SliderThumb />
        </RadixSlider.Root>
    );
};

export default Slider;

