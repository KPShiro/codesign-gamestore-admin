import { isNotDefined } from '@/utils';
import * as RadixToast from '@radix-ui/react-toast';
import { createContext, useContext } from 'react';

type ShowToastConfig = Pick<React.ComponentProps<typeof RadixToast.Root>, 'duration'> & {
    variant: 'neutral' | 'primary' | 'warning' | 'danger';
    title: string;
    description?: string;
    action?: {
        label: string;
        callback: () => void;
    };
};

type ToastContextType = {
    show: (config: ShowToastConfig) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const useToastContext = () => {
    const context = useContext(ToastContext);

    if (isNotDefined(context)) {
        throw new Error('Hook must be used within the ToastContext!');
    }

    return context;
};

export { ToastContext, useToastContext, type ShowToastConfig, type ToastContextType };
