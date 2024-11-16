import { Skeleton } from '@/components/skeleton';
import Input from '@/components/ui/input';
import { isNotDefined } from '@/utils';
import CreateGameButton from '../components/create-game/create-game-button';
import GamesTable from '../components/games-table';
import { useGames } from '../hooks/use-games';

const GamesCatalog = () => {
    const { data: games, isLoading } = useGames();

    if (isNotDefined(games) || isLoading) {
        return (
            <div className="flex flex-col gap-6 p-6">
                <Skeleton className="h-5 max-w-48" />
                <div className="flex justify-between gap-4">
                    <Skeleton className="h-10 w-full min-w-56 max-w-96" />
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
                    <Input
                        type="search"
                        placeholder="Search by game title or ID..."
                        className="w-full min-w-56 max-w-96"
                    />
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
