import { isNotDefined } from '@/utils';
import { createContext, useContext } from 'react';

type StepperContextType = {
    prev: () => void;
    next: () => void;
};

const StepperContext = createContext<StepperContextType | undefined>(undefined);

const useStepper = () => {
    const context = useContext(StepperContext);

    if (isNotDefined(context)) {
        throw new Error('Hook must be used within the StepperContext!');
    }

    return context;
};

export { StepperContext, useStepper };
