import { containsSearchString, isDefined, isNotDefined } from '@/utils';
import { useEffect, useState } from 'react';
import { Game } from '../models/game';
import { useGames } from './use-games';
import { useGamesFilters } from './use-games-filters';

export const useFilteredGames = () => {
    const [games, setGames] = useState<Game[]>([]);

    const { data, ...useGamesValues } = useGames();
    const { filters } = useGamesFilters();

    useEffect(() => {
        if (isNotDefined(data)) {
            return;
        }

        let filteredGames = [...data];
        const { search, publishStatus } = filters;

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
    }, [data, filters]);

    return { games, ...useGamesValues };
};
