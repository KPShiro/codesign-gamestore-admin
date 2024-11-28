import Input from '@components/ui/input';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import { useEffect, useState } from 'react';

const SearchFilter = () => {
    const { filters, updateFilters } = useGamesFilters();
    const [value, setValue] = useState<string>(filters.search ?? '');

    useEffect(() => {
        setValue(filters.search ?? '');
    }, [filters.search]);

    const handleOnValueChange = (value: string) => {
        updateFilters({
            search: value,
        });
    };

    return (
        <Input
            type="search"
            placeholder="Search in games..."
            className="md:max-w-64"
            value={value}
            onChange={(e) => handleOnValueChange(e.target.value)}
        />
    );
};

export default SearchFilter;
