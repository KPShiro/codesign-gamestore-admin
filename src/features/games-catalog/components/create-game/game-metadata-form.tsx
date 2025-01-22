import ImageInput from '@/components/image-input';
import { useToast } from '@/features/toast';
import { TextInput } from '@components/text-input';
import FormField from '@components/ui/form';
import { Controller, useFormContext } from 'react-hook-form';
import { CreateGameFormData } from '../../schemas/create-game';
import GameProviderInput from './game-provider-input';
import GameStudioInput from './game-studio-input';

const GameMetadataForm = () => {
    const { control } = useFormContext<CreateGameFormData>();
    const toast = useToast();

    return (
        <div className="space-y-4">
            <FormField>
                <FormField.Label>Thumbnail</FormField.Label>
                <Controller
                    control={control}
                    name="thumbnail"
                    render={({ field }) => (
                        <ImageInput
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                            onError={(error) => {
                                toast.show({
                                    variant: 'danger',
                                    title: error.type,
                                    description: error.file.name,
                                });
                            }}
                        />
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Title</FormField.Label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            onValueChange={field.onChange}
                            placeholder="e.g. Fantastic Game 3"
                        />
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Provider</FormField.Label>
                <Controller
                    control={control}
                    name="providerId"
                    render={({ field }) => (
                        <GameProviderInput value={field.value} onValueChange={field.onChange} />
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Studio</FormField.Label>
                <Controller
                    control={control}
                    name="studioId"
                    render={({ field }) => (
                        <GameStudioInput value={field.value} onValueChange={field.onChange} />
                    )}
                />
            </FormField>
        </div>
    );
};

export default GameMetadataForm;
