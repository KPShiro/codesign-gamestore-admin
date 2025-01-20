import { useStepperContext } from '@/features/stepper/hooks/use-stepper-context';
import { Slot } from '@radix-ui/react-slot';

type StepperButton = React.ComponentProps<'button'> & {
    asChild?: boolean;
};

const StepperButton = ({ asChild, ...props }: StepperButton) => {
    const Comp = asChild ? Slot : 'button';

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        if (props.disabled) {
            return;
        }

        props.onClick?.(event);
    };

    return <Comp type="button" {...props} onClick={handleOnClick} />;
};

const StepperNextButton = ({ ...props }: StepperButton) => {
    const context = useStepperContext();

    return context.canNext ? (
        <StepperButton
            {...props}
            disabled={props.disabled || !context.isValid}
            onClick={context.next}
        />
    ) : null;
};

const StepperPrevButton = ({ ...props }: StepperButton) => {
    const context = useStepperContext();

    return context.canPrev ? <StepperButton {...props} onClick={context.prev} /> : null;
};

const StepperCompleteButton = ({ ...props }: StepperButton) => {
    const context = useStepperContext();

    return !context.canNext ? (
        <StepperButton {...props} disabled={props.disabled || !context.isValid} />
    ) : null;
};

export { StepperCompleteButton, StepperNextButton, StepperPrevButton };
