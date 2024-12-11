import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { EditIcon } from 'lucide-react';

export const useEditGameAction = (id: Game['id']) => {
    const { hasPermissions } = usePermissions();

    const fetchData = () => {
        console.log('EditGame...', id);
    };

    return useAction({
        icon: EditIcon,
        label: 'Edit details',
        isDisabled: !hasPermissions(['Game.Read', 'Game.Update']),
        callback: fetchData,
    });
};
