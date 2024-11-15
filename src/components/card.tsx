import { cn } from '@/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type CardProps = ComponentProps<'div'> & PropsWithChildren;

const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div {...props} className={cn('bg-card flex flex-col gap-4 rounded border p-6', className)}>
            {children}
        </div>
    );
};

export default Card;
