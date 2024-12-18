import { cn } from '@/utils';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

const Trigger = ({ className, ...props }: React.ComponentProps<typeof RadixSelect.Value>) => {
    return (
        <RadixSelect.Trigger
            className={cn(
                'flex h-10 items-center justify-between rounded border bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-disabled',
                className
            )}
        >
            <RadixSelect.Value {...props} placeholder={props.placeholder ?? 'Select item'} />
            <RadixSelect.Icon asChild>
                <ChevronsUpDownIcon size={12} className="stroke-foreground" />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>
    );
};

const Item = ({ children, ...props }: React.ComponentProps<typeof RadixSelect.Item>) => {
    return (
        <RadixSelect.Item
            {...props}
            className={cn(
                'flex h-10 cursor-pointer select-none items-center justify-between gap-3 rounded-sm border-2 border-transparent px-3 text-sm ring-offset-background hover:bg-foreground/5 focus-visible:bg-foreground/5 focus-visible:outline-none data-[disabled]:cursor-default data-[state=checked]:bg-primary/15 data-[state=checked]:text-primary data-[disabled]:opacity-disabled data-[disabled]:hover:bg-transparent',
                props.className
            )}
        >
            <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
            <RadixSelect.ItemIndicator asChild>
                <CheckIcon size={12} />
            </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
    );
};

const Group = ({ ...props }: React.ComponentProps<typeof RadixSelect.Group>) => {
    return <RadixSelect.Group {...props} className={cn('space-y-0.5', props.className)} />;
};

const Label = ({ ...props }: React.ComponentProps<typeof RadixSelect.Label>) => {
    return (
        <RadixSelect.Label
            {...props}
            className={cn(
                'inline-flex h-10 items-center px-3 text-xs text-muted-foreground',
                props.className
            )}
        />
    );
};

const Separator = ({ ...props }: React.ComponentProps<typeof RadixSelect.Separator>) => {
    return (
        <RadixSelect.Separator {...props} className={cn('my-2 h-px bg-border', props.className)} />
    );
};

const Content = ({ children, ...props }: React.ComponentProps<typeof RadixSelect.Content>) => {
    return (
        <RadixSelect.Portal>
            <RadixSelect.Content
                {...props}
                position={props.position ?? 'popper'}
                sideOffset={props.sideOffset ?? 4}
                className={cn(
                    'z-50 min-w-fit rounded border bg-background p-0.5 shadow-lg',
                    'w-[var(--radix-select-trigger-width)]',
                    'max-h-[var(--radix-select-content-available-height)]',
                    props.className
                )}
            >
                <RadixSelect.Viewport className="space-y-0.5">{children}</RadixSelect.Viewport>
            </RadixSelect.Content>
        </RadixSelect.Portal>
    );
};

const Select = ({ children, ...props }: React.ComponentProps<typeof RadixSelect.Root>) => {
    return <RadixSelect.Root {...props}>{children}</RadixSelect.Root>;
};

Select.Trigger = Trigger;
Select.Item = Item;
Select.Group = Group;
Select.Label = Label;
Select.Separator = Separator;
Select.Content = Content;

export default Select;
