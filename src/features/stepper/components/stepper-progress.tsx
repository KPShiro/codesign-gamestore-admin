import { useMemo } from 'react';
import { useStepperContext } from '../hooks/use-stepper-context';

const StepperProgress = () => {
    const context = useStepperContext();

    const activeStep = useMemo(
        () => context.steps[context.activeIndex],
        [context.activeIndex, context.steps]
    );

    const progress = useMemo(() => {
        return (context.activeIndex / (context.steps.length - 1)) * 100;
    }, [context.activeIndex, context.steps.length]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium text-primary">{activeStep.label}</div>
                <div className="text-xs text-muted-foreground">
                    Step {context.activeIndex + 1} / {context.steps.length}
                </div>
            </div>
            <div className="w-full overflow-clip rounded-full bg-primary/25">
                <div className="h-1 bg-primary" style={{ width: `${progress.toString()}%` }}></div>
            </div>
        </div>
    );
};

export default StepperProgress;
