import NumberInput from '@components/number-input';
import Button from '@components/ui/button';
import { DialogFooter } from '@components/ui/dialog';
import FormField from '@components/ui/form';
import {
    GameConfigurationFormData,
    GameConfigurationFormSchema,
} from '@features/games-catalog/schemas/game-configuration';
import { Stepper } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
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

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField>
                <FormField.Label>RTP</FormField.Label>
                <Controller
                    control={control}
                    name="rtp"
                    render={({ field }) => (
                        <NumberInput {...field} onValueChange={field.onChange} />
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Max. Win</FormField.Label>
                <Controller
                    control={control}
                    name="maxWin"
                    render={({ field }) => (
                        <NumberInput {...field} onValueChange={field.onChange} />
                    )}
                />
            </FormField>
            <DialogFooter>
                <Stepper.Prev text="Previous Step" />
                <Button type="submit" text="Complete and Save" disabled={!formState.isValid} />
            </DialogFooter>
        </form>
    );
};

export default GameConfigurationForm;
