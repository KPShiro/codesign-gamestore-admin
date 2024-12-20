import { usePermissions } from '@/hooks/use-permissions';
import Button from '@components/ui/button';
import { Dialog, useDialog } from '@features/dialog';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import { useNotifications } from '@features/notifications';
import { useToast } from '@features/toast';
import React from 'react';
import { Link } from 'react-router-dom';
import CreateGameForm from './create-game-form';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const { hasPermissions } = usePermissions();
    const notifications = useNotifications();
    const dialog = useDialog();
    const toast = useToast();

    const handleOnSuccess = async (value: CreateGameFormData) => {
        dialog.close();

        notifications.add({
            title: (
                <>
                    {/* TODO: Get game entity from backend (with ID) */}
                    <Link to={'/catalog/games/GAME_ID'}>{value.title}</Link> was added to the games
                    catalog
                </>
            ),
        });

        toast.show({
            variant: 'primary',
            title: `${value.title} was added to the games catalog`,
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
