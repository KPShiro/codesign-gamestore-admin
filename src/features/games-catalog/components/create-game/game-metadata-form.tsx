import { FormField } from '@/components/form-field';
import ImageInput from '@/components/image-input';
import { useToast } from '@/features/toast';
import { TextInput } from '@components/text-input';
import { Controller, useFormContext } from 'react-hook-form';
import { CreateGameFormData } from '../../schemas/create-game';
import GameProviderInput from './game-provider-input';
import GameStudioInput from './game-studio-input';

const GameMetadataForm = () => {
    const { control } = useFormContext<CreateGameFormData>();
    const toast = useToast();

    return (
        <div className="space-y-4">
            <Controller
                control={control}
                name="thumbnail"
                render={({ field, fieldState }) => (
                    <FormField>
                        <FormField.Label>Thumbnail</FormField.Label>
                        <ImageInput
                            {...field}
                            value={field.value}
                            invalid={!!fieldState.error}
                            onValueChange={field.onChange}
                            onError={(error) => {
                                toast.show({
                                    variant: 'danger',
                                    title: error.type,
                                    description: error.file.name,
                                });
                            }}
                        />
                    </FormField>
                )}
            />
            <Controller
                control={control}
                name="title"
                render={({ field, fieldState }) => (
                    <FormField>
                        <FormField.Label>Title</FormField.Label>
                        <TextInput
                            {...field}
                            onValueChange={field.onChange}
                            placeholder="e.g. Fantastic Game 3"
                            invalid={!!fieldState.error}
                        />
                    </FormField>
                )}
            />
            <Controller
                control={control}
                name="providerId"
                render={({ field }) => (
                    <FormField>
                        <FormField.Label>Provider</FormField.Label>
                        <GameProviderInput value={field.value} onValueChange={field.onChange} />
                    </FormField>
                )}
            />
            <Controller
                control={control}
                name="studioId"
                render={({ field }) => (
                    <FormField>
                        <FormField.Label>Studio</FormField.Label>
                        <GameStudioInput value={field.value} onValueChange={field.onChange} />
                    </FormField>
                )}
            />
        </div>
    );
};

export default GameMetadataForm;
