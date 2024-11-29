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
import { AppNotification } from '@features/notifications/hooks/use-notifications-context';
import { useToast } from '@features/toast';
import React, { useState } from 'react';
import CreateGameForm from './create-game-form';

const GameAddedNotification = (
    author: string,
    gameTitle: string,
    message?: string
): Omit<AppNotification, 'id' | 'timestamp'> => {
    return {
        author: 'Peter Parker',
        title: (
            <>
                <span className="font-medium text-foreground">{author}</span> added a new game{' '}
                <span className="font-medium text-foreground">{gameTitle}</span>
            </>
        ),
        description: message,
    };
};

type CreateGameButtonProps = Pick<React.ComponentProps<typeof Button>, 'disabled'>;

const CreateGameButton = (props: CreateGameButtonProps) => {
    const [opened, setOpened] = useState<boolean>(false);
    const notifications = useNotifications();
    const toast = useToast();

    const handleOnSubmit = (value: CreateGameFormData) => {
        const FAKE_USER = 'Peter Parker';
        notifications.add({
            author: FAKE_USER,
            title: (
                <>
                    <span className="font-medium text-foreground">{FAKE_USER}</span> added a new
                    game <span className="font-medium text-foreground">{value.title}</span>
                </>
            ),
            description: '',
        });
        toast.show({
            variant: 'primary',
            title: `"${value.title}" added to the catalog`,
            description:
                "Game was added but won't be available for customers until it's published.",
            action: {
                label: 'Publish Now',
                callback: () => console.error('Not implemented!'),
            },
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
