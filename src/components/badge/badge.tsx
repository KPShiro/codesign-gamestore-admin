import { cn } from '@/utils';
import { ComponentProps } from 'react';

type BadgeProps = Pick<ComponentProps<'div'>, 'className'> & {
    text: string;
};

export const Badge = ({ text, className }: BadgeProps) => {
    return (
        <div
            title={text}
            className={cn(
                'inline-flex max-w-40 truncate rounded-full border border-transparent px-2 pt-0.5 pb-1 text-xs font-medium select-none',
                className
            )}
        >
            {text}
        </div>
    );
};
