import { OutlinedButton } from '@/components/button';
import { cn } from '@/utils';
import { ShowToastConfig } from '@features/toast/hooks/use-toast-context';
import * as RadixToast from '@radix-ui/react-toast';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
    'flex flex-col gap-4 border border-l-4 rounded transition-all bg-surface p-4 pr-6 shadow-xl data-[state=closed]:animate-slide-out-right data-[state=open]:animate-slide-in-left',
    {
        variants: {
            variant: {
                neutral: 'border-l-border',
                danger: 'border-l-danger',
                warning: 'border-l-warning',
                primary: 'border-l-primary',
            },
        },
        defaultVariants: {
            variant: 'neutral',
        },
    }
);

type ToastProps = React.ComponentProps<typeof RadixToast.Root> &
    VariantProps<typeof variants> & {
        config: ShowToastConfig;
    };

const Toast = ({ config, ...props }: ToastProps) => {
    return (
        <RadixToast.Root
            {...props}
            duration={config.duration ?? props.duration}
            className={cn(variants({ variant: config.variant }))}
        >
            <div className="space-y-1">
                <RadixToast.Title className="text-sm font-medium">{config.title}</RadixToast.Title>
                {config.description ? (
                    <RadixToast.Description className="text-on-surface/60 text-sm">
                        {config.description}
                    </RadixToast.Description>
                ) : null}
            </div>
            {config.action ? (
                <div>
                    <RadixToast.Action altText={config.action.label} asChild>
                        <OutlinedButton
                            size="sm"
                            text={config.action.label}
                            onClick={config.action.callback}
                        />
                    </RadixToast.Action>
                </div>
            ) : null}
        </RadixToast.Root>
    );
};

export default Toast;
