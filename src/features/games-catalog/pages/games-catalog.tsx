import { isNotDefined } from '@/utils';
import { Skeleton } from '@components/skeleton';
import CreateGameButton from '@features/games-catalog/components/create-game/create-game-button';
import GamesFilters from '@features/games-catalog/components/games-filters';
import GamesTable from '@features/games-catalog/components/games-table/games-table';
import { useGames } from '@features/games-catalog/hooks/use-games';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { Game } from '@features/games-catalog/models/game';
import { useEffect, useState } from 'react';

const GamesCatalog = () => {
    const [games, setGames] = useState<Game[]>([]);

    const { data, isLoading } = useGames();
    const { filters } = useGamesFilters();

    useEffect(() => {
        setGames(data ?? []);
    }, [data]);

    useEffect(() => {
        if (isNotDefined(data)) {
            return;
        }

        let filteredGames = [...data];

        filteredGames = filteredGames.filter(
            (game) =>
                game.title.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase()) ||
                game.id.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase())
        );

        filteredGames = filteredGames.filter((game) =>
            filters.publishStatus !== 'ANY' ? game.publishStatus === filters.publishStatus : game
        );

        setGames(filteredGames);
    }, [data, filters]);

    if (isNotDefined(games) || isLoading) {
        return (
            <div className="flex flex-col gap-6 p-6">
                <Skeleton className="h-5 max-w-48" />
                <div className="flex justify-between gap-4">
                    <div className="inline-flex w-full items-center gap-2">
                        <Skeleton className="h-10 w-full min-w-56 max-w-64" />
                        <Skeleton className="h-10 w-32" />
                    </div>
                    <Skeleton className="h-10 w-24" />
                </div>
                <Skeleton className="h-96" />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-xl/none font-medium">Games Catalog</h1>
            </div>
            <div className="flex justify-between gap-4">
                <div className="inline-flex flex-1 gap-2">
                    <GamesFilters />
                </div>
                <div className="inline-flex gap-2">
                    <CreateGameButton />
                </div>
            </div>
            <GamesTable games={games} />
        </div>
    );
};

export default GamesCatalog;
