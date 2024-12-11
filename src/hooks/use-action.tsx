import { LucideProps } from 'lucide-react';
import { useCallback, useState } from 'react';

export type Action = {
    icon: React.ElementType<LucideProps> | undefined;
    label: string;
    isHidden: boolean;
    isDisabled: boolean;
    isProcessing: boolean;
    execute: () => void;
};

type UseActionProps = {
    icon?: React.ElementType<LucideProps>;
    label: string;
    isHidden?: boolean;
    isDisabled?: boolean;
    callback: () => Promise<void> | void;
};

export function useAction(props: UseActionProps): Action {
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleExecute = useCallback(async () => {
        if (props.isDisabled || isProcessing) {
            return;
        }

        try {
            setIsProcessing(true);
            const result = props.callback();

            if (result instanceof Promise) {
                await result;
            }
        } finally {
            setIsProcessing(false);
        }
    }, [props.isDisabled, props.callback]);

    return {
        icon: props.icon,
        label: props.label,
        isHidden: props.isHidden ?? false,
        isDisabled: props.isDisabled ?? false,
        isProcessing: isProcessing,
        execute: handleExecute,
    };
}
