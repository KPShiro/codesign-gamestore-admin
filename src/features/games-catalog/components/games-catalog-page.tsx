import PageWrapper from '@/components/page-wrapper';
import { Skeleton } from '@/components/skeleton';
import Button from '@components/ui/button';
import Icon from '@components/ui/icon';
import CreateGameButton from '@features/games-catalog/components/create-game/create-game-button';
import GamesTableFilters from '@features/games-catalog/components/games-table-filters';
import GamesTable from '@features/games-catalog/components/games-table/games-table';
import { useFilteredGames } from '@features/games-catalog/hooks/use-filtered-games';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { SearchIcon } from 'lucide-react';

const GamesCatalogPage = () => {
    const { games, isLoading } = useFilteredGames();
    const { isFiltering, resetFilters } = useGamesFilters();

    if (isLoading) {
        return (
            <PageWrapper>
                <Skeleton className="h-7 max-w-56" />
                <div className="flex items-center justify-between md:flex-row">
                    <Skeleton className="h-10 w-full max-w-96" />
                    <Skeleton className="h-10 w-full max-w-24" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-8" />
                    <Skeleton className="h-24" />
                    <Skeleton className="h-24" />
                    <Skeleton className="h-24" />
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-medium">Games Catalog</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                <GamesTableFilters />
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
                    <Button variant={'outlined'} text="Reset filters" onClick={resetFilters} />
                </div>
            ) : null}
        </PageWrapper>
    );
};

export default GamesCatalogPage;
