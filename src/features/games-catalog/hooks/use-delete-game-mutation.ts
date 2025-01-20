import { useToast } from '@/features/toast';
import { isDefined } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GamesClient } from '../clients/games';
import { Game } from '../models/game';

export const useDeleteGameMutation = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationKey: ['delete-game'],
        mutationFn: GamesClient.deleteGame,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['games'] });
            const games = queryClient.getQueryData<Game[]>(['games']);

            return { games };
        },
        onSuccess: () => {
            toast.show({
                variant: 'primary',
                title: 'Game removed from the catalog',
            });
        },
        onError: (error, _, context) => {
            toast.show({
                variant: 'danger',
                title: 'Error while deleting the game',
                description: error.message,
            });

            if (isDefined(context)) {
                queryClient.setQueryData(['games'], context.games);
            }
        },
        onSettled: () => {
            return queryClient.invalidateQueries({
                queryKey: ['games'],
            });
        },
    });
};
