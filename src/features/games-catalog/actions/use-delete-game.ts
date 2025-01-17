import { useAction } from '@/hooks/use-action';
import { usePermissions } from '@/hooks/use-permissions';
import { Game } from '@features/games-catalog/models/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { GamesClient } from '../clients/games';

export const useDeleteGameAction = (id: Game['id']) => {
    const { hasPermissions } = usePermissions();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ['deleteGame'],
        mutationFn: GamesClient.deleteGame,
        // onMutate: async () => {
        //     await queryClient.cancelQueries({ queryKey: ['games'] });
        //     const prevGames = queryClient.getQueriesData(['games']);

        //     queryClient.setQueryData(['games'], (games) => games.filter((game) => game.id !== id));

        //     return { prevGames };
        // },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['games'] });
        },
    });

    const fetchData = async () => {
        await mutation.mutateAsync(id);
    };

    return useAction({
        icon: TrashIcon,
        label: 'Delete',
        isDisabled: !hasPermissions(['Game.Delete']) || mutation.isPending,
        callback: fetchData,
    });
};
