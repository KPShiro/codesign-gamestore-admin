import { isNotDefined } from '@/utils';
import { createContext, useContext } from 'react';

type NavigationMethod = () => void;

type RenderMethodProps = {
    prev: NavigationMethod;
    next: NavigationMethod;
};

type StepperItem = {
    id: string;
    label: string;
    isValid?: boolean;
    render: (config: RenderMethodProps) => React.ReactNode;
};

type StepperContextType = {
    steps: readonly StepperItem[];
    activeIndex: number;
    isValid: boolean;
    canPrev: boolean;
    canNext: boolean;
    prev: NavigationMethod;
    next: NavigationMethod;
};

const StepperInternalContext = createContext<StepperContextType | undefined>(undefined);

const useStepperContext = () => {
    const context = useContext(StepperInternalContext);

    if (isNotDefined(context)) {
        throw new Error('Hook must be used within the StepperInternalContext!');
    }

    return context;
};

export { StepperInternalContext, useStepperContext, type StepperContextType, type StepperItem };
