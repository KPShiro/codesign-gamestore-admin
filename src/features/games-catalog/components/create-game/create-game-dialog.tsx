import Button from '@/components/ui/button';
import { Dialog, useDialog } from '@features/dialog';
import { Stepper, StepperItem } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useCreateGameMutation } from '../../hooks/use-create-game-mutation';
import { CreateGameFormData, CreateGameFormSchema } from '../../schemas/create-game';
import { GameMetadataFormSchema } from '../../schemas/game-metadata';
import GameConfigurationForm from './game-configuration-form';
import GameMetadataForm from './game-metadata-form';

const CreateGameDialog = () => {
    const createGameForm = useForm<CreateGameFormData>({
        resolver: zodResolver(CreateGameFormSchema),
        defaultValues: {
            status: 'NOT_PUBLISHED',
            maxWin: 1000,
            rtp: 95,
        },
    });

    const createGameMutation = useCreateGameMutation();
    const formValue = createGameForm.watch();
    const dialog = useDialog();

    const steps: StepperItem[] = [
        {
            id: 'general',
            label: 'General information',
            isValid: GameMetadataFormSchema.safeParse(formValue).success,
            render: () => (
                <GameMetadataForm
                    value={formValue}
                    onValueChange={(data) => {
                        createGameForm.reset((value) => ({ ...value, ...data }), {
                            keepErrors: true,
                        });
                    }}
                />
            ),
        },
        {
            id: 'assets',
            label: 'Game Configuration',
            isValid: CreateGameFormSchema.safeParse(formValue).success,
            render: () => (
                <GameConfigurationForm
                    value={formValue}
                    onValueChange={(data) => {
                        createGameForm.reset((value) => ({ ...value, ...data }), {
                            keepErrors: true,
                        });
                    }}
                />
            ),
        },
    ];

    const handleSubmitForm = async () => {
        const data = createGameForm.getValues();
        await createGameMutation.mutateAsync({
            ...data,
            win: {
                // TODO: Add WIN_MIN to the createGameForm
                min: 0,
                max: data.maxWin,
            },
        });
        dialog.close();
    };

    return (
        <Stepper steps={steps}>
            <Dialog.Content aria-describedby={undefined}>
                <Dialog.Header>
                    <Dialog.Title>Add Game</Dialog.Title>
                    <Dialog.Description>Add a new game to the catalog</Dialog.Description>
                </Dialog.Header>
                <Stepper.ProgressBar />
                <Dialog.Body>
                    <Stepper.Content />
                </Dialog.Body>
                <Dialog.Footer>
                    <Stepper.Prev asChild>
                        <Button variant="outlined" type="button" text="Previous step" />
                    </Stepper.Prev>
                    <Stepper.Next asChild>
                        <Button type="button" text="Next step" />
                    </Stepper.Next>
                    <Stepper.Complete asChild onClick={handleSubmitForm}>
                        <Button
                            type="button"
                            text="Complete"
                            disabled={createGameMutation.isPending}
                            loading={createGameMutation.isPending}
                        />
                    </Stepper.Complete>
                </Dialog.Footer>
            </Dialog.Content>
        </Stepper>
    );
};

export default CreateGameDialog;
