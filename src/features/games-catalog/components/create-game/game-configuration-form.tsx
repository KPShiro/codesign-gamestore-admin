import NumberInput from '@components/number-input';
import Button from '@components/ui/button';
import FormField from '@components/ui/form';
import { Dialog } from '@features/dialog';
import {
    GameConfigurationFormData,
    GameConfigurationFormSchema,
} from '@features/games-catalog/schemas/game-configuration';
import { Stepper } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutationState } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';

type GameConfigurationFormProps = {
    onSubmit: (data: GameConfigurationFormData) => void;
    values: Partial<GameConfigurationFormData>;
};

const GameConfigurationForm = ({ onSubmit, values }: GameConfigurationFormProps) => {
    const { control, formState, handleSubmit } = useForm<GameConfigurationFormData>({
        resolver: zodResolver(GameConfigurationFormSchema),
        mode: 'onChange',
        defaultValues: values,
    });

    const mutationState = useMutationState({
        filters: {
            mutationKey: ['create-game'],
            status: 'pending',
        },
    });
    const isPending = mutationState[0]?.status === 'pending';

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField>
                <FormField.Label>RTP</FormField.Label>
                <Controller
                    control={control}
                    name="rtp"
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                            min={0}
                            max={100}
                        />
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Max. Win</FormField.Label>
                <Controller
                    control={control}
                    name="maxWin"
                    render={({ field }) => (
                        <NumberInput
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                            min={0}
                        />
                    )}
                />
            </FormField>
            <Dialog.Footer>
                <Stepper.Prev text="Previous Step" />
                <Button
                    type="submit"
                    text="Complete and Save"
                    disabled={!formState.isValid || isPending}
                    loading={isPending}
                />
            </Dialog.Footer>
        </form>
    );
};

export default GameConfigurationForm;
