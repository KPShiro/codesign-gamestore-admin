import { cn } from '@/utils';
import { ComponentProps, PropsWithChildren } from 'react';

type CardProps = ComponentProps<'div'> & PropsWithChildren;

const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div {...props} className={cn('rounded-md border bg-background p-4', className)}>
            {children}
        </div>
    );
};

export default Card;
