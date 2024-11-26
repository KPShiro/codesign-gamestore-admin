import { cn } from '@/utils';

const LayoutPage = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
    return (
        <div {...props} className={cn('flex flex-1 flex-col gap-6 p-6', className)}>
            {children}
        </div>
    );
};

export default LayoutPage;
