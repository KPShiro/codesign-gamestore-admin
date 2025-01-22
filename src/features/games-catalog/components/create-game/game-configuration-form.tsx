import RangeInput from '@/components/range-input/range-input';
import FormField from '@components/ui/form';
import { Controller, useFormContext } from 'react-hook-form';
import { CreateGameFormData } from '../../schemas/create-game';

const GameConfigurationForm = () => {
    const { control } = useFormContext<CreateGameFormData>();

    return (
        <div className="space-y-4">
            <FormField>
                <FormField.Label>RTP</FormField.Label>
                <Controller
                    control={control}
                    name="rtp"
                    render={({ field }) => (
                        <RangeInput
                            {...field}
                            value={[field.value]}
                            onValueChange={(value) => {
                                field.onChange(value[0]);
                            }}
                            step={5}
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
                    name="win"
                    render={({ field }) => (
                        <RangeInput
                            {...field}
                            value={[field.value.min, field.value.max]}
                            onValueChange={(value) => {
                                field.onChange({ min: value[0], max: value[1] });
                            }}
                            step={1_000}
                            min={0}
                            max={10_000}
                        />
                    )}
                />
            </FormField>
        </div>
    );
};

export default GameConfigurationForm;
