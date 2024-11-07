import { useMemo } from 'react';
import { useStepperContext } from '../hooks/use-stepper-context';

const StepperContent = () => {
    const context = useStepperContext();

    const activeStep = useMemo(
        () => context.steps[context.activeIndex],
        [context.activeIndex, context.steps]
    );

    return activeStep.render({ prev: context.prev, next: context.next });
};

export default StepperContent;
