import StepperContent from '@features/stepper/components/stepper-content';
import StepperProgress from '@features/stepper/components/stepper-progress';
import { StepperContext } from '@features/stepper/hooks/use-stepper';
import { StepperInternalContext, StepperItem } from '@features/stepper/hooks/use-stepper-context';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { StepperNextButton, StepperPrevButton } from './stepper-button';

type StepperProps = PropsWithChildren<{
    steps: readonly StepperItem[];
}>;

const Stepper = ({ steps, children }: StepperProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const canPrev = useMemo(() => activeIndex > 0, [activeIndex]);
    const canNext = useMemo(() => activeIndex < steps.length - 1, [activeIndex, steps.length]);

    const handlePrev = useCallback(() => {
        if (canPrev) {
            setActiveIndex((index) => index - 1);
        }
    }, [canPrev]);

    const handleNext = useCallback(() => {
        if (canNext) {
            setActiveIndex((index) => index + 1);
        }
    }, [canNext]);

    return (
        <StepperInternalContext.Provider
            value={{
                steps,
                activeIndex,
                canPrev,
                canNext,
                prev: handlePrev,
                next: handleNext,
            }}
        >
            <StepperContext.Provider value={{ prev: handlePrev, next: handleNext }}>
                {children}
            </StepperContext.Provider>
        </StepperInternalContext.Provider>
    );
};

Stepper.Content = StepperContent;
Stepper.Next = StepperNextButton;
Stepper.Prev = StepperPrevButton;
Stepper.Progress = StepperProgress;

export default Stepper;
