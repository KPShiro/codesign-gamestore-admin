import PageWrapper from '@/components/page-wrapper';
import { Skeleton } from '@/components/skeleton';
import Button from '@/components/ui/button';
import { isNotDefined } from '@/utils';
import CreateGameButton from '@features/games-catalog/components/create-game/create-game-button';
import { PublishStatusFilter, SearchFilter } from '@features/games-catalog/components/filters';
import GamesTable from '@features/games-catalog/components/games-table/games-table';
import { useFilteredGames } from '@features/games-catalog/hooks/use-filtered-games';

const GamesCatalogPage = () => {
    const { games, isLoading, clearFilters } = useFilteredGames();

    if (isNotDefined(games) || isLoading) {
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
            <h1 className="text-xl font-semibold">Games Catalog</h1>
            <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div className="flex max-w-md flex-1 gap-2">
                    <SearchFilter />
                    <PublishStatusFilter />
                </div>
                <CreateGameButton />
            </div>
            {games.length ? (
                <GamesTable games={games} />
            ) : (
                <div className="flex flex-col items-center gap-6 rounded border p-20">
                    <div className="max-w-prose space-y-2 text-center text-sm">
                        <h5 className="font-semibold uppercase">No Results Found</h5>
                        <p className="text-muted-foreground">
                            Minus veniam nesciunt, esse ullam quidem quae aperiam necessitatibus
                            neque. Ad hic, a libero nam sunt voluptate necessitatibus veritatis.
                        </p>
                    </div>
                    <Button variant={'outlined'} text="Clear filters" onClick={clearFilters} />
                </div>
            )}
        </PageWrapper>
    );
};

export default GamesCatalogPage;
