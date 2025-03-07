import { FilledButton, OutlinedButton } from '@/components/button';
import { Dialog } from '@/features/dialog';
import { useMutationState } from '@tanstack/react-query';
import { Game } from '../models/game';

type DeleteGameDialogProps = {
    gameTitle: Game['title'];
    onConfirmClick: () => void;
};

const DeleteGameDialog = ({ gameTitle, onConfirmClick }: DeleteGameDialogProps) => {
    const mutationState = useMutationState({
        filters: {
            mutationKey: ['delete-game'],
        },
    });
    const isPending = mutationState[0]?.status === 'pending';

    return (
        <Dialog.Content>
            <Dialog.Header>
                <Dialog.Title>{gameTitle}</Dialog.Title>
                <Dialog.Description>Remove game from the catalog</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body className="bg-danger/5 text-danger">
                <p className="text-sm font-medium">
                    Warning, this action is irreversible. To restore the game, you will need to
                    recreate it manually.
                </p>
            </Dialog.Body>
            <Dialog.Footer>
                <Dialog.Close asChild>
                    <OutlinedButton text="Cancel" />
                </Dialog.Close>
                <FilledButton
                    color="danger"
                    text="Delete forever"
                    loading={isPending}
                    disabled={isPending}
                    onClick={onConfirmClick}
                />
            </Dialog.Footer>
        </Dialog.Content>
    );
};

export default DeleteGameDialog;
