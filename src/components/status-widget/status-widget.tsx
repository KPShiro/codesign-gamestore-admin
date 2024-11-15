import { cn } from '@/utils';
import StatusWidgetIndicator, {
    StatusWidgetIndicatorVariantProps,
} from './status-widget-indicator';

export type StatusWidgetProps = React.ComponentPropsWithoutRef<'div'> & {
    variant: StatusWidgetIndicatorVariantProps['variant'];
    text: string;
};

const StatusWidget = ({ variant, text, className, ...props }: StatusWidgetProps) => {
    return (
        <div
            {...props}
            className={cn(
                'bg-card inline-flex max-w-full cursor-default select-none items-center gap-2 rounded-full border px-2.5 py-1',
                className
            )}
        >
            <StatusWidgetIndicator variant={variant} />
            <div className="truncate text-xs font-medium capitalize">{text.toLowerCase()}</div>
        </div>
    );
};

export default StatusWidget;
