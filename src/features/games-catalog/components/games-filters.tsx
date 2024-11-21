import Input from '@components/ui/input';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';

const GamesFilters = () => {
    const gamesFilters = useGamesFilters();

    return (
        <div className="inline-flex w-full gap-2">
            <Input
                type="search"
                placeholder="Search by game title or ID..."
                className="w-full min-w-56 max-w-96"
                value={gamesFilters.filters.search}
                onChange={(e) => {
                    gamesFilters.updateFilters({
                        search: e.target.value,
                    });
                }}
            />
        </div>
    );
};

export default GamesFilters;
