import { isNotDefined } from '@/utils';
import LayoutPage from '@components/layouts/layout-page';
import { Skeleton } from '@components/skeleton';
import Button from '@components/ui/button';
import CreateGameButton from '@features/games-catalog/components/create-game/create-game-button';
import GamesFilters from '@features/games-catalog/components/games-filters';
import GamesTable from '@features/games-catalog/components/games-table/games-table';
import { useGames } from '@features/games-catalog/hooks/use-games';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { Game } from '@features/games-catalog/models/game';
import { useLayoutEffect, useState } from 'react';

const GamesCatalog = () => {
    const [games, setGames] = useState<Game[]>([]);

    const { data, isLoading } = useGames();
    const { filters, resetFilters } = useGamesFilters();

    useLayoutEffect(() => {
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

    if (isNotDefined(data) || isLoading) {
        return (
            <LayoutPage>
                <Skeleton className="h-5 max-w-48" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
                    <div className="flex gap-2">
                        <Skeleton className="h-10 w-full md:max-w-64" />
                        <Skeleton className="h-10 w-32" />
                    </div>
                    <Skeleton className="h-10 md:w-24" />
                </div>
                <div className="flex flex-col gap-1">
                    {Array(7)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} className="h-20" />
                        ))}
                </div>
            </LayoutPage>
        );
    }

    return (
        <LayoutPage>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl/none font-medium">Games Catalog</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto]">
                <GamesFilters />
                <CreateGameButton />
            </div>
            {games.length > 0 ? (
                <GamesTable games={games} />
            ) : (
                <div className="flex items-center justify-between gap-4 rounded bg-primary/5 p-6">
                    <div className="flex max-w-sm flex-col gap-1">
                        <h1 className="text-sm font-semibold uppercase">Results not found</h1>
                        <p className="text-sm text-muted-foreground">
                            We couldn't find items matching your criteria. Please update filters or
                            make sure they have correct values.
                        </p>
                    </div>
                    <div>
                        <Button variant={'tonal'} text="Clear Filters" onClick={resetFilters} />
                    </div>
                </div>
            )}
        </LayoutPage>
    );
};

export default GamesCatalog;

