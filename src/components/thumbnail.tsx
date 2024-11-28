import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const variants = cva('object-cover', {
    variants: {
        size: {
            sm: 'size-10 rounded-sm',
            md: 'size-16 rounded-md',
            lg: 'size-24 rounded-lg',
            full: 'size-full',
        },
    },
    defaultVariants: {
        size: 'md',
    },
});

type ThumbnailProps = Pick<React.ComponentProps<'img'>, 'src' | 'alt'> &
    VariantProps<typeof variants> & {
        size: 'sm' | 'md' | 'lg' | 'full';
    };

const Thumbnail = ({ src, alt, size }: ThumbnailProps) => {
    return <img src={src} alt={alt} className={cn(variants({ size }))} />;
};

export default Thumbnail;
