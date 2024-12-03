import { DialogFooter } from '@components/dialog';
import FileInput from '@components/file-input';
import TextInput from '@components/text-input';
import Button from '@components/ui/button';
import FormField from '@components/ui/form';
import Select from '@components/ui/select';
import { useGamesProviders } from '@features/games-catalog/hooks/use-games-providers';
import { useGamesStudios } from '@features/games-catalog/hooks/use-games-studios';
import {
    GameMetadataFormData,
    GameMetadataFormSchema,
} from '@features/games-catalog/schemas/game-metadata';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

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

    const { data: providers } = useGamesProviders();
    const { data: studios } = useGamesStudios();

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
                        <FileInput
                            {...field}
                            placeholder="Upload thumbnail file"
                            accept="image/*"
                            maxSize={3_145_728}
                            showFileRestrictions
                            onChange={field.onChange}
                            value={field.value}
                        />
                    )}
                />
            </FormField>
            <FormField className="">
                <FormField.Label>Provider</FormField.Label>
                <Controller
                    control={control}
                    name="providerId"
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger className="min-w-40" placeholder="Select provider" />
                            <Select.Content>
                                {providers.map((provider) => (
                                    <Select.Item key={provider.id} value={provider.id}>
                                        {provider.name}
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select>
                    )}
                />
            </FormField>
            <FormField>
                <FormField.Label>Studio</FormField.Label>
                <Controller
                    control={control}
                    name="studioId"
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger className="min-w-40" placeholder="Select provider" />
                            <Select.Content>
                                {studios.map((studio) => (
                                    <Select.Item key={studio.id} value={studio.id}>
                                        {studio.name}
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select>
                    )}
                />
            </FormField>
            <DialogFooter>
                <Button type="submit" text="Continue" disabled={!formState.isValid} />
            </DialogFooter>
        </form>
    );
};

export default GameMetadataForm;
