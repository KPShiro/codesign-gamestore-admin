import { cn } from '@/utils';

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('animate-pulse rounded-md bg-foreground/5', className)} {...props} />;
};

export { Skeleton };
