import * as RadixPopover from '@radix-ui/react-popover';
import { PopoverContent } from './popover-content';

const Popover = ({ ...props }: React.ComponentProps<typeof RadixPopover.Root>) => {
    return <RadixPopover.Root {...props} />;
};

Popover.Trigger = RadixPopover.Trigger;
Popover.Content = PopoverContent;

export default Popover;
