import { useQuery } from '@tanstack/react-query';
import { GamesClient } from '../clients/games';

export const useGames = () => {
    return useQuery({
        queryKey: ['games'],
        queryFn: GamesClient.getGames,
    });
};
