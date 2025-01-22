import { useDialog } from '@/features/dialog';
import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { TrashIcon } from 'lucide-react';
import DeleteGameDialog from '../components/delete-game-dialog';
import { useDeleteGameMutation } from '../hooks/use-delete-game-mutation';

export const useDeleteGameAction = (id: Game['id'], gameTitle: Game['title']) => {
    const { hasPermissions } = usePermissions();
    const mutation = useDeleteGameMutation();
    const dialog = useDialog();

    const handleOnClick = () => {
        dialog.open(
            <DeleteGameDialog
                gameTitle={gameTitle}
                onConfirmClick={async () => {
                    await mutation.mutateAsync(id);
                    dialog.close();
                }}
            />
        );
    };

    return useAction({
        icon: TrashIcon,
        label: 'Delete',
        isDisabled: !hasPermissions(['Game.Delete']) || mutation.isPending,
        callback: handleOnClick,
    });
};
