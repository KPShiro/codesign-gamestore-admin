import { useQuery } from '@tanstack/react-query';
import { GamesClient } from '../clients/games';

export const useGamesProviders = () => {
    const { data, ...query } = useQuery({
        queryKey: ['games-providers'],
        queryFn: GamesClient.getProviders,
    });

    return {
        data: data ? data.sort((a, b) => a.name.localeCompare(b.name)) : data,
        ...query,
    };
};
