import { DialogFooter } from '@components/dialog';
import Button from '@components/ui/button';
import FileInput from '@components/ui/file-input';
import FormField from '@components/ui/form';
import Input from '@components/ui/input';
import Select from '@components/ui/select';
import { GamePublishStatuses } from '@features/games-catalog/models/game-publish-status';
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
    const { control, formState, register, handleSubmit } = useForm<GameMetadataFormData>({
        resolver: zodResolver(GameMetadataFormSchema),
        mode: 'onChange',
        defaultValues: values,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormField>
                <FormField.Label>Title</FormField.Label>
                <Input {...register('title')} placeholder="e.g. The Witcher 3" />
            </FormField>
            <FormField>
                <FormField.Label>Publish Status (optional)</FormField.Label>
                <Controller
                    control={control}
                    name="status"
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                            <Select.Trigger placeholder="Select status" />
                            <Select.Content>
                                {GamePublishStatuses.map((item) => (
                                    <Select.Item key={item} value={item}>
                                        <span className="capitalize">
                                            {item.toLocaleLowerCase()}
                                        </span>
                                    </Select.Item>
                                ))}
                            </Select.Content>
                        </Select>
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
