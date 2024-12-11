import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { EyeIcon } from 'lucide-react';

export const useViewGameAction = (id: Game['id']) => {
    const { hasPermissions } = usePermissions();

    const fetchData = () => {
        console.log('ViewGame...', id);
    };

    return useAction({
        icon: EyeIcon,
        label: 'View details',
        isDisabled: !hasPermissions(['Game.Read']),
        callback: fetchData,
    });
};
