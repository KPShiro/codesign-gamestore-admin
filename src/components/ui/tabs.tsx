import { cn } from '@/utils';
import * as RadixTabs from '@radix-ui/react-tabs';

const Tabs = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.Root>) => {
    return <RadixTabs.Root {...props} className={cn('space-y-4', className)} />;
};

const TabsList = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.List>) => {
    return (
        <RadixTabs.List
            {...props}
            className={cn('inline-flex h-10 gap-0.5 rounded-md bg-muted p-0.5', className)}
        />
    );
};

const TabsTrigger = ({ className, ...props }: React.ComponentProps<typeof RadixTabs.Trigger>) => {
    return (
        <RadixTabs.Trigger
            {...props}
            className={cn(
                'h-full text-nowrap rounded-sm px-4 text-sm font-medium text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
                className
            )}
        />
    );
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = RadixTabs.Content;

export default Tabs;
