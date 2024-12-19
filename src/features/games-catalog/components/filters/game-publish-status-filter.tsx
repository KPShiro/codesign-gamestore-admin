import Select from '@/components/ui/select';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import {
    GamePublishStatus,
    GamePublishStatuses,
    GamePublishStatusLabels,
} from '@features/games-catalog/models/game-publish-status';

const PublishStatusFilter = () => {
    const filters = useGamesFilters();
    const value = filters.get('publishStatus') ?? 'ANY';

    const handleOnValueChange = (status: GamePublishStatus | 'ANY') => {
        filters.update('publishStatus', status === 'ANY' ? null : status);
    };

    return (
        <Select value={value} onValueChange={handleOnValueChange}>
            <Select.Trigger placeholder="Select status" className="w-full max-w-40" />
            <Select.Content>
                <Select.Group>
                    <Select.Item value="ANY">Any Status</Select.Item>
                    {GamePublishStatuses.map((status) => (
                        <Select.Item key={status} value={status}>
                            {GamePublishStatusLabels.get(status)}
                        </Select.Item>
                    ))}
                </Select.Group>
            </Select.Content>
        </Select>
    );
};

export default PublishStatusFilter;
