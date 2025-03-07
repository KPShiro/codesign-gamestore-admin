import { cn } from '@/utils';
import { Icon } from '@components/icon';
import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';

type TriggerProps = React.ComponentProps<typeof RadixSelect.Value> & {
    invalid?: boolean;
};

const Trigger = ({ className, invalid, ...props }: TriggerProps) => {
    return (
        <RadixSelect.Trigger
            className={cn(
                'bg-surface focus-visible:bg-surface-container data-[state=open]:bg-surface-container disabled:opacity-disabled data-[state=open]:ring-primary/15 focus-visible:ring-primary/15 focus-visible:border-primary data-[state=open]:border-primary flex h-10 w-full items-center justify-between gap-3 rounded-md border px-3 text-sm focus-visible:ring-3 focus-visible:outline-none disabled:pointer-events-none data-[state=open]:ring-3 data-[state=open]:outline-none',
                invalid && 'ring-danger/15 not-focus:border-danger not-focus:bg-danger/10 ring-3',
                className
            )}
        >
            <div className="truncate">
                <RadixSelect.Value {...props} placeholder={props.placeholder ?? 'Select item'} />
            </div>
            <RadixSelect.Icon asChild>
                <Icon
                    icon={ChevronsUpDownIcon}
                    size="sm"
                    strokeWidth={1}
                    className="stroke-on-surface"
                />
            </RadixSelect.Icon>
        </RadixSelect.Trigger>
    );
};

const Item = ({ children, ...props }: React.ComponentProps<typeof RadixSelect.Item>) => {
    return (
        <RadixSelect.Item
            {...props}
            className={cn(
                'ring-offset-surface hover:bg-on-surface/3 focus-visible:bg-on-surface/3 data-[state=checked]:bg-primary/5 data-[state=checked]:text-primary data-[disabled]:opacity-disabled flex h-10 cursor-pointer items-center justify-between gap-3 rounded-sm border-2 border-transparent px-3 text-sm select-none focus-visible:outline-none data-[disabled]:cursor-default data-[disabled]:hover:bg-transparent',
                props.className
            )}
        >
            <div className="truncate">
                <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
            </div>
            <RadixSelect.ItemIndicator asChild>
                <Icon icon={CheckIcon} size="xs" strokeWidth={1} />
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
                'text-on-surface/60 inline-flex h-10 items-center px-3 text-xs',
                props.className
            )}
        />
    );
};

const Separator = ({ ...props }: React.ComponentProps<typeof RadixSelect.Separator>) => {
    return (
        <RadixSelect.Separator {...props} className={cn('bg-border my-2 h-px', props.className)} />
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
                    'bg-surface-container z-50 rounded-md border p-0.5 shadow-lg',
                    'max-w-64 min-w-[var(--radix-select-trigger-width)]',
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
