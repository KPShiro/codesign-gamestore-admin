import { cn } from '@/utils';

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('bg-on-surface/5 animate-pulse rounded-md', className)} {...props} />;
};

export default Skeleton;
