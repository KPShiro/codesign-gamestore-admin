import { FilledButton, OutlinedButton } from '@/components/button';
import { Dialog, useDialog } from '@features/dialog';
import { Stepper, StepperItem } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
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
            title: '',
            rtp: 50,
            win: {
                min: 0,
                max: 1_000,
            },
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
            render: () => <GameMetadataForm />,
        },
        {
            id: 'assets',
            label: 'Game Configuration',
            isValid: CreateGameFormSchema.safeParse(formValue).success,
            render: () => <GameConfigurationForm />,
        },
    ];

    const handleSubmitForm = async () => {
        const data = createGameForm.getValues();
        await createGameMutation.mutateAsync({
            ...data,
            rtp: data.rtp / 100,
        });
        dialog.close();
    };

    return (
        <Stepper steps={steps}>
            <FormProvider {...createGameForm}>
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
                            <OutlinedButton text="Previous step" />
                        </Stepper.Prev>
                        <Stepper.Next asChild>
                            <FilledButton text="Next step" />
                        </Stepper.Next>
                        <Stepper.Complete asChild>
                            <FilledButton
                                text="Complete"
                                disabled={createGameMutation.isPending}
                                loading={createGameMutation.isPending}
                                onClick={handleSubmitForm}
                            />
                        </Stepper.Complete>
                    </Dialog.Footer>
                </Dialog.Content>
            </FormProvider>
        </Stepper>
    );
};

export default CreateGameDialog;
