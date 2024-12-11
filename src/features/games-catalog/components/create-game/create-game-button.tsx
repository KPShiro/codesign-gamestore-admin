import { usePermissions } from '@/hooks/use-permissions';
import Button from '@components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@components/ui/dialog';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import { useNotifications } from '@features/notifications';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateGameForm from './create-game-form';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const [opened, setOpened] = useState<boolean>(false);
    const { hasPermissions } = usePermissions();
    const notifications = useNotifications();

    const handleOnSubmit = async (value: CreateGameFormData) => {
        // TODO: Get game entity from backend (with ID)
        notifications.add({
            title: (
                <>
                    <Link to={'/catalog/games/GAME_ID'}>{value.title}</Link> was added to the games
                    catalog
                </>
            ),
        });
        setOpened(false);
    };

    return (
        <Dialog open={opened} onOpenChange={setOpened}>
            <DialogTrigger asChild>
                <Button {...props} text="Add Game" disabled={!hasPermissions(['Game.Create'])} />
            </DialogTrigger>
            <DialogContent aria-describedby={undefined}>
                <DialogHeader>
                    <DialogTitle>Adding Game</DialogTitle>
                </DialogHeader>
                <CreateGameForm onSubmit={handleOnSubmit} />
            </DialogContent>
        </Dialog>
    );
};

export default CreateGameButton;
