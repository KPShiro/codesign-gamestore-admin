import { cn } from '@/utils';
import * as RadixPopover from '@radix-ui/react-popover';

export const PopoverContent = ({
    children,
    className,
    ...props
}: React.ComponentProps<typeof RadixPopover.Content>) => {
    return (
        <RadixPopover.Portal>
            <RadixPopover.Content
                {...props}
                side={props.side ?? 'bottom'}
                sideOffset={props.sideOffset ?? 4}
                align={props.align ?? 'center'}
                className={cn(
                    'bg-surface-container data-[state=closed]:animate-slide-out-down data-[state=open]:animate-slide-in-up max-w-lg rounded-md border shadow-md',
                    className
                )}
            >
                {children}
            </RadixPopover.Content>
        </RadixPopover.Portal>
    );
};
