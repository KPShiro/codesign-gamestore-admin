import { DialogFooter } from '@components/dialog';
import Button from '@components/ui/button';
import FormField from '@components/ui/form';
import Input from '@components/ui/input';
import {
    GameConfigurationFormData,
    GameConfigurationFormSchema,
} from '@features/games-catalog/schemas/game-configuration';
import { Stepper } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type GameConfigurationFormProps = {
    onSubmit: (data: GameConfigurationFormData) => void;
    values: Partial<GameConfigurationFormData>;
};

const GameConfigurationForm = ({ onSubmit, values }: GameConfigurationFormProps) => {
    const { formState, register, handleSubmit } = useForm<GameConfigurationFormData>({
        resolver: zodResolver(GameConfigurationFormSchema),
        mode: 'onChange',
        defaultValues: values,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField>
                <FormField.Label>RTP</FormField.Label>
                <Input
                    {...register('rtp', { valueAsNumber: true })}
                    type="number"
                    min="0"
                    max="100"
                />
            </FormField>
            <FormField>
                <FormField.Label>Max. Win</FormField.Label>
                <Input {...register('maxWin', { valueAsNumber: true })} type="number" min="0" />
            </FormField>
            <DialogFooter>
                <Stepper.Prev text="Previous Step" />
                <Button type="submit" text="Complete and Save" disabled={!formState.isValid} />
            </DialogFooter>
        </form>
    );
};

export default GameConfigurationForm;
