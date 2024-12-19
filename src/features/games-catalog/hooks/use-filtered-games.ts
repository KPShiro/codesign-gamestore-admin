import { containsSearchString, isDefined, isNotDefined } from '@/utils';
import { useGames } from '@features/games-catalog/hooks/use-games';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { Game } from '@features/games-catalog/models/game';
import { useEffect, useState } from 'react';

export const useFilteredGames = () => {
    const [games, setGames] = useState<Game[] | null>(null);

    const { data, ...useGamesValues } = useGames();
    const filters = useGamesFilters();

    useEffect(() => {
        if (isNotDefined(data)) {
            return;
        }

        let filteredGames = [...data];
        const { search, publishStatus } = filters.filters;

        if (isDefined(search)) {
            filteredGames = filteredGames.filter(
                (game) =>
                    containsSearchString(game.title, search) ||
                    containsSearchString(game.id, search)
            );
        }

        if (isDefined(publishStatus)) {
            filteredGames = filteredGames.filter((game) => game.publishStatus === publishStatus);
        }

        setGames(filteredGames);
    }, [data, filters.filters]);

    return {
        games,
        ...useGamesValues,
        isFiltering: filters.isFiltering,
        clearFilters: filters.clear,
    };
};
