import { cn } from '@/utils';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.Root>) => {
    return <RadixTabs.Root {...props} className={cn('', className)} />;
};

const TabsList = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.List>) => {
    return <RadixTabs.List {...props} className={cn('overflow-x-auto text-nowrap', className)} />;
};

const TabsTrigger = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.Trigger>) => {
    return (
        <RadixTabs.Trigger
            {...props}
            className={cn(
                'text-on-surface data-[state=active]:border-primary hover:border-border h-10 border-b-2 border-transparent px-4 text-sm font-medium text-nowrap',
                className
            )}
        />
    );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = RadixTabs.Content;

export default Tabs;
