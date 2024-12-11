import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { TrashIcon } from 'lucide-react';

export const useDeleteGameAction = (id: Game['id']) => {
    const { hasPermissions } = usePermissions();

    const fetchData = () => {
        console.log('DeleteGame...', id);
    };

    return useAction({
        icon: TrashIcon,
        label: 'Delete',
        isDisabled: !hasPermissions(['Game.Delete']),
        callback: fetchData,
    });
};
