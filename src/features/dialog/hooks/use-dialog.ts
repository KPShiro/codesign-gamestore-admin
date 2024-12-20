import { isNotDefined } from '@/utils';
import { createContext, useContext } from 'react';

type DialogContextValue = {
    open: (component: React.ReactElement) => void;
    close: () => void;
};

export const DialogContext = createContext<DialogContextValue | null>(null);

export const useDialog = () => {
    const context = useContext(DialogContext);

    if (isNotDefined(context)) {
        throw new Error('Hook must be used within the DialogContext!');
    }

    return context;
};
