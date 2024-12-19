import Input from '@components/ui/input';
import { useGamesFilters } from '@features/games-catalog/hooks/use-games-filters';
import React from 'react';

const SearchFilter = () => {
    const filters = useGamesFilters();
    const value = filters.get('search') ?? '';

    const handleOnValueChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = String(event.target.value);
        filters.update('search', value ? value : null);
    };

    return (
        <Input
            type="search"
            placeholder="Search in games..."
            value={value}
            onChange={handleOnValueChange}
        />
    );
};

export default SearchFilter;
