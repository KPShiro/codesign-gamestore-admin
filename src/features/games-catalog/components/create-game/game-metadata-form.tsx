import ImageInput from '@/components/image-input';
import { useToast } from '@/features/toast';
import TextInput from '@components/text-input';
import Button from '@components/ui/button';
import FormField from '@components/ui/form';
import { Dialog } from '@features/dialog';
import {
    GameMetadataFormData,
    GameMetadataFormSchema,
} from '@features/games-catalog/schemas/game-metadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import GameProviderInput from './game-provider-input';
import GameStudioInput from './game-studio-input';

type GameMetadataFormProps = {
    onSubmit: (data: GameMetadataFormData) => void;
    values: Partial<GameMetadataFormData>;
};

const GameMetadataForm = ({ onSubmit, values }: GameMetadataFormProps) => {
    const { control, formState, handleSubmit } = useForm<GameMetadataFormData>({
        resolver: zodResolver(GameMetadataFormSchema),
        mode: 'onChange',
        defaultValues: values,
    });
    const toast = useToast();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField>
                <FormField.Label>Title</FormField.Label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            onValueChange={field.onChange}
                            placeholder="e.g. The Witcher 3"
                        />
                    )}
                />
            </FormField>
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
            <Dialog.Footer>
                <Button type="submit" text="Continue" disabled={!formState.isValid} />
            </Dialog.Footer>
        </form>
    );
};

export default GameMetadataForm;
