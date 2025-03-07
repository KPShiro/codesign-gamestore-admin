import { cn } from '@/utils';
import { ComponentProps } from 'react';

type CardProps = ComponentProps<'div'> & {
    mode?: 'static' | 'interactive';
};

export const Card = ({ children, className, mode = 'static', ...props }: CardProps) => {
    return (
        <div
            {...props}
            className={cn(
                'bg-surface-container ring-border/25 rounded-md border ring-4',
                mode === 'interactive' &&
                    'transition-all duration-300 hover:ring-8 hover:shadow-md',
                className
            )}
        >
            {children}
        </div>
    );
};
