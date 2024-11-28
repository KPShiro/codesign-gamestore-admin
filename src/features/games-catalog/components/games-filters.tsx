import Input from '@components/ui/input';
import Select from '@components/ui/select';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import {
    GamePublishStatus,
    GamePublishStatuses,
} from '@features/games-catalog/models/game-publish-status';

const GamesFilters = () => {
    const { filters, updateFilters } = useGamesFilters();

    return (
        <div className="flex gap-2">
            <Input
                type="search"
                placeholder="Search by game title or ID..."
                className="w-full md:max-w-64"
                value={filters.search}
                onChange={(e) => {
                    updateFilters({
                        search: e.target.value,
                    });
                }}
            />
            <Select
                value={filters.publishStatus}
                onValueChange={(value: GamePublishStatus) =>
                    updateFilters({ publishStatus: value })
                }
            >
                <Select.Trigger className="w-32" />
                <Select.Content>
                    <Select.Item value="ANY">Any</Select.Item>
                    {GamePublishStatuses.map((item) => (
                        <Select.Item key={item} value={item}>
                            <span className="capitalize">{item.toLocaleLowerCase()}</span>
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select>
        </div>
    );
};

export default GamesFilters;

