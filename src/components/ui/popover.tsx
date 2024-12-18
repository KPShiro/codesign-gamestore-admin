import { cn } from '@/utils';
import * as RadixPopover from '@radix-ui/react-popover';

const Popover = ({ ...props }: React.ComponentProps<typeof RadixPopover.Root>) => {
    return <RadixPopover.Root {...props} />;
};

const PopoverContent = ({
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
                align={props.align ?? 'end'}
                className={cn(
                    'max-w-lg rounded border bg-background shadow data-[state=closed]:animate-slide-out-down data-[state=open]:animate-slide-in-up',
                    className
                )}
            >
                {children}
            </RadixPopover.Content>
        </RadixPopover.Portal>
    );
};

Popover.Trigger = RadixPopover.Trigger;
Popover.Content = PopoverContent;

export default Popover;
