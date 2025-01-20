import NumberInput from '@components/number-input';
import FormField from '@components/ui/form';
import {
    GameConfigurationFormData,
    GameConfigurationFormSchema,
} from '@features/games-catalog/schemas/game-configuration';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

type GameConfigurationFormProps = {
    value?: Partial<GameConfigurationFormData>;
    onValueChange: (value: Partial<GameConfigurationFormData>) => void;
};

const GameConfigurationForm = ({ value, onValueChange }: GameConfigurationFormProps) => {
    const { control, watch } = useForm<GameConfigurationFormData>({
        resolver: zodResolver(GameConfigurationFormSchema),
        mode: 'onChange',
        defaultValues: value,
    });

    useEffect(() => {
        const { unsubscribe } = watch((data) => {
            onValueChange?.(data);
        });

        return () => unsubscribe();
    }, [watch]);

    return (
        <form className="space-y-4">
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
        </form>
    );
};

export default GameConfigurationForm;
