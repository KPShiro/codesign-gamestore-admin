import { useMemo } from 'react';
import { useStepperContext } from '../hooks/use-stepper-context';

const StepperProgressBar = () => {
    const context = useStepperContext();

    const progress = useMemo(() => {
        return (context.activeIndex / (context.steps.length - 1)) * 100;
    }, [context.activeIndex, context.steps.length]);

    return (
        <div className="w-full overflow-clip bg-primary/25">
            <div className="h-1 bg-primary" style={{ width: `${progress.toString()}%` }}></div>
        </div>
    );
};

const StepperProgressCounter = () => {
    const context = useStepperContext();

    return `Step ${context.activeIndex + 1} / ${context.steps.length}`;
};

const StepperProgressTitle = () => {
    const context = useStepperContext();

    const activeStep = useMemo(
        () => context.steps[context.activeIndex],
        [context.activeIndex, context.steps]
    );

    return activeStep.label;
};

const StepperProgress = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-primary">
                    <StepperProgressTitle />
                </div>
                <div className="text-xs text-muted-foreground">
                    <StepperProgressCounter />
                </div>
            </div>
            <div className="overflow-clip rounded-full">
                <StepperProgressBar />
            </div>
        </div>
    );
};

export { StepperProgress, StepperProgressBar, StepperProgressCounter, StepperProgressTitle };
