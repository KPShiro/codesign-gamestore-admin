import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('object-cover rounded-sm', {
    variants: {
        size: {
            sm: 'size-10',
            md: 'size-16',
            lg: 'size-24',
            full: 'size-full',
        },
    },
    defaultVariants: {
        size: 'md',
    },
});

type ThumbnailProps = Pick<React.ComponentProps<'img'>, 'src' | 'alt' | 'className'> &
    VariantProps<typeof variants> & {
        size: 'sm' | 'md' | 'lg' | 'full';
    };

const Thumbnail = ({ src, alt, className, size }: ThumbnailProps) => {
    return <img src={src} alt={alt} className={cn(variants({ size, className }))} />;
};

export default Thumbnail;
