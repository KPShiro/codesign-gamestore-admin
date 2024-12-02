import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@components/dialog';
import Button from '@components/ui/button';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import { useNotifications } from '@features/notifications';
import React, { useState } from 'react';
import CreateGameForm from './create-game-form';

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const [opened, setOpened] = useState<boolean>(false);
    const notifications = useNotifications();

    const handleOnSubmit = (value: CreateGameFormData) => {
        notifications.add({
            title: (
                <>
                    <span className="font-bold text-foreground">{value.title}</span> was added to
                    the games catalog
                </>
            ),
        });
        setOpened(false);
    };

    return (
        <Dialog open={opened} onOpenChange={setOpened}>
            <DialogTrigger asChild>
                <Button {...props} text="Add Game" />
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

