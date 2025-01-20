import ImageInput from '@/components/image-input';
import { useToast } from '@/features/toast';
import TextInput from '@components/text-input';
import FormField from '@components/ui/form';
import {
    GameMetadataFormData,
    GameMetadataFormSchema,
} from '@features/games-catalog/schemas/game-metadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import GameProviderInput from './game-provider-input';
import GameStudioInput from './game-studio-input';

type GameMetadataFormProps = {
    value?: Partial<GameMetadataFormData>;
    onValueChange: (value: Partial<GameMetadataFormData>) => void;
};

const GameMetadataForm = ({ value, onValueChange }: GameMetadataFormProps) => {
    const { control, watch } = useForm<GameMetadataFormData>({
        resolver: zodResolver(GameMetadataFormSchema),
        mode: 'onChange',
        defaultValues: value,
    });
    const toast = useToast();

    useEffect(() => {
        const { unsubscribe } = watch((data) => {
            onValueChange?.(data);
        });

        return () => unsubscribe();
    }, [watch]);

    return (
        <form className="space-y-4">
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
        </form>
    );
};

export default GameMetadataForm;
