import { DialogFooter } from '@components/dialog';
import TextInput from '@components/text-input';
import Button from '@components/ui/button';
import FileInput from '@components/ui/file-input';
import FormField from '@components/ui/form';
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
            <DialogFooter>
                <Button type="submit" text="Continue" disabled={!formState.isValid} />
            </DialogFooter>
        </form>
    );
};

export default GameMetadataForm;

