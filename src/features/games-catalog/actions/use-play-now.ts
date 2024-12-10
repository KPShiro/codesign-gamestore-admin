import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { PlayIcon } from 'lucide-react';

export const usePlayNowAction = (id: Game['id']) => {
    const { hasPermissions } = usePermissions();

    const fetchData = () => {
        console.log('PlayNow...', id);
    };

    return useAction({
        icon: PlayIcon,
        label: 'Play Now',
        isDisabled: !hasPermissions(['Game.Read']),
        callback: fetchData,
    });
};
