import Button from '@/components/ui/button';
import { useStepperContext } from '@/features/stepper/hooks/use-stepper-context';
import { Slot } from '@radix-ui/react-slot';

type StepperButton = React.ComponentProps<typeof Button> & {
    asChild?: boolean;
};

const StepperButton = ({ asChild, ...props }: StepperButton) => {
    const Comp = asChild ? Slot : Button;

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

    return context.canNext ? <StepperButton {...props} onClick={context.next} /> : null;
};

const StepperPrevButton = ({ ...props }: StepperButton) => {
    const context = useStepperContext();

    return context.canPrev ? (
        <StepperButton variant="outlined" {...props} onClick={context.prev} />
    ) : null;
};

export { StepperNextButton, StepperPrevButton };
