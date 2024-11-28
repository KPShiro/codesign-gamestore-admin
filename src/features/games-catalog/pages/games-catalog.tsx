import LayoutPage from '@components/layouts/layout-page';
import Button from '@components/ui/button';
import Icon from '@components/ui/icon';
import CreateGameButton from '@features/games-catalog/components/create-game/create-game-button';
import GamesFilters from '@features/games-catalog/components/games-table-filters/games-filters';
import GamesTable from '@features/games-catalog/components/games-table/games-table';
import { useFilteredGames } from '@features/games-catalog/hooks/use-filtered-games';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { Loader2Icon, SearchIcon } from 'lucide-react';

const GamesCatalog = () => {
    const { games, isLoading } = useFilteredGames();
    const { isFiltering, resetFilters } = useGamesFilters();

    if (isLoading) {
        return (
            <LayoutPage className="items-center justify-center">
                <Icon
                    icon={Loader2Icon}
                    size={24}
                    strokeWidth={2}
                    className="animate-spin text-muted-foreground"
                />
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
            {games.length > 0 ? <GamesTable games={games} /> : null}
            {games.length === 0 && isFiltering ? (
                <div className="flex h-80 flex-col items-center justify-center gap-6 border">
                    <div className="flex items-center justify-center rounded">
                        <Icon
                            icon={SearchIcon}
                            size={42}
                            strokeWidth={4}
                            className="text-muted-foreground"
                        />
                    </div>
                    <div className="flex max-w-sm flex-col items-center gap-2 text-center text-muted-foreground">
                        <h1 className="font-semibold">No results found</h1>
                        <p className="text-sm">
                            It seems we can’t find any results based on your search.
                        </p>
                    </div>
                    <Button
                        variant={'outlined'}
                        size={'xs'}
                        text="Reset filters"
                        onClick={resetFilters}
                    />
                </div>
            ) : null}
        </LayoutPage>
    );
};

export default GamesCatalog;
