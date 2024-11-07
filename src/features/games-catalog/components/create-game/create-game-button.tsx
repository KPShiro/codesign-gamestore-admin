import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@components/dialog';
import Button from '@components/ui/button';
import { CreateGameFormData } from '@features/games-catalog/schemas/create-game';
import { useToast } from '@features/toast';
import { useState } from 'react';
import CreateGameForm from './create-game-form';

const CreateGameButton = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const toast = useToast();

    const handleOnSubmit = (value: CreateGameFormData) => {
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
                <Button text="Add Game" />
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
