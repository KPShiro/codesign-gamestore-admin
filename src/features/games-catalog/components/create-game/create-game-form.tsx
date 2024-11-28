import GameConfigurationForm from '@features/games-catalog/components/create-game/game-configuration-form';
import GameMetadataForm from '@features/games-catalog/components/create-game/game-metadata-form';
import {
    CreateGameFormData,
    CreateGameFormSchema,
} from '@features/games-catalog/schemas/create-game';
import { Stepper, StepperItem } from '@features/stepper';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type CreateGameFormProps = {
    onSubmit: (data: CreateGameFormData) => void;
};

const CreateGameForm = ({ onSubmit }: CreateGameFormProps) => {
    const form = useForm<CreateGameFormData>({
        resolver: zodResolver(CreateGameFormSchema),
        defaultValues: {
            status: 'NOT_PUBLISHED',
            rtp: 90,
            maxWin: 1000,
        },
    });

    const steps: StepperItem[] = [
        {
            id: 'general',
            label: 'General information',
            render: ({ next }) => (
                <GameMetadataForm
                    values={form.getValues()}
                    onSubmit={(data) => {
                        form.reset((values) => ({ ...values, ...data }));
                        next();
                    }}
                />
            ),
        },
        {
            id: 'assets',
            label: 'Game Configuration',
            render: () => (
                <GameConfigurationForm
                    values={form.getValues()}
                    onSubmit={async (data) => {
                        form.reset((values) => ({ ...values, ...data }));
                        await form.handleSubmit(onSubmit)();
                    }}
                />
            ),
        },
    ];

    return (
        <Stepper steps={steps}>
            <Stepper.Progress />
            <Stepper.Content />
        </Stepper>
    );
};

export default CreateGameForm;
