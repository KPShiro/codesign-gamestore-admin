import { useQuery } from '@tanstack/react-query';
import { GamesClient } from '../clients/games';

export const useGamesStudios = () => {
    const { data, ...query } = useQuery({
        queryKey: ['games-studios'],
        queryFn: GamesClient.getStudios,
    });

    return {
        data: data ? data.sort((a, b) => a.name.localeCompare(b.name)) : data,
        ...query,
    };
};
