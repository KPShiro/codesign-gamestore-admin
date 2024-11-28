import Select from '@components/ui/select';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import {
    GamePublishStatus,
    GamePublishStatuses,
    GamePublishStatusLabels,
} from '@features/games-catalog/models/game-publish-status';
import { useEffect, useState } from 'react';

type SelectValue = GamePublishStatus | 'ANY';

const PublishStatusFilter = () => {
    const { filters, updateFilters } = useGamesFilters();
    const [value, setValue] = useState<SelectValue>(filters.publishStatus ?? 'ANY');

    useEffect(() => {
        setValue(filters.publishStatus ?? 'ANY');
    }, [filters.publishStatus]);

    const handleOnValueChange = (value: SelectValue) => {
        updateFilters({
            publishStatus: value === 'ANY' ? undefined : value,
        });
    };

    return (
        <Select value={value} onValueChange={handleOnValueChange}>
            <Select.Trigger className="min-w-40" placeholder="Select status" />
            <Select.Content>
                <Select.Item value="ANY">Any Status</Select.Item>
                {GamePublishStatuses.map((status) => (
                    <Select.Item key={status} value={status}>
                        {GamePublishStatusLabels.get(status)}
                    </Select.Item>
                ))}
            </Select.Content>
        </Select>
    );
};

export default PublishStatusFilter;
