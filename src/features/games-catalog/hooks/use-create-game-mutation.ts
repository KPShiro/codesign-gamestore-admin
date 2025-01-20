import { useToast } from '@/features/toast';
import { isDefined } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GamesClient } from '../clients/games';
import { Game } from '../models/game';

export const useCreateGameMutation = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    return useMutation({
        mutationKey: ['create-game'],
        mutationFn: GamesClient.createGame,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['games'] });
            const games = queryClient.getQueryData<Game[]>(['games']);

            return { games };
        },
        onSuccess: () => {
            toast.show({
                variant: 'primary',
                title: 'Game added to the catalog',
                description: "This game won't be available for brands until published.",
            });
        },
        onError: (error, _, context) => {
            toast.show({
                variant: 'danger',
                title: 'Error while creating the game',
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
