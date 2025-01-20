import { usePermissions } from '@/hooks/use-permissions';
import Button from '@components/ui/button';
import { Dialog, useDialog } from '@features/dialog';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import React from 'react';
import { useCreateGameMutation } from '../../hooks/use-create-game-mutation';
import CreateGameForm from './create-game-form';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const { hasPermissions } = usePermissions();
    const createGameMutation = useCreateGameMutation();
    const dialog = useDialog();

    const handleOnSuccess = async (data: CreateGameFormData) => {
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

    const handleOnClick = () => {
        dialog.open(
            <Dialog.Content aria-describedby={undefined}>
                <Dialog.Header>
                    <Dialog.Title>Adding Game</Dialog.Title>
                </Dialog.Header>
                <CreateGameForm onSuccess={handleOnSuccess} />
            </Dialog.Content>
        );
    };

    return (
        <Button
            {...props}
            text="Add Game"
            disabled={!hasPermissions(['Game.Create'])}
            onClick={handleOnClick}
        />
    );
};

export default CreateGameButton;
