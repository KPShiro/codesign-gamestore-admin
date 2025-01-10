import { usePermissions } from '@/hooks/use-permissions';
import Button from '@components/ui/button';
import { Dialog, useDialog } from '@features/dialog';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import { useToast } from '@features/toast';
import React from 'react';
import CreateGameForm from './create-game-form';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const { hasPermissions } = usePermissions();
    const dialog = useDialog();
    const toast = useToast();

    const handleOnSuccess = async (value: CreateGameFormData) => {
        dialog.close();
        toast.show({
            variant: 'primary',
            title: 'Game added to the catalog!',
            description: `"${value.title}" was successfully added to the catalog. Game won't be available for brands until published.`,
        });
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
