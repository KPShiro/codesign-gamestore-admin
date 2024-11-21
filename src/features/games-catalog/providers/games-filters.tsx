import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GamesFilters, GamesFiltersContext } from '../hooks/use-games-filters';

const GamesFiltersProvider = ({ children }: PropsWithChildren) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<GamesFilters>({
        search: searchParams.get('search') ?? '',
    });

    useEffect(() => {
        const isFiltering = filters.search !== '';

        setSearchParams(isFiltering ? filters : {});
    }, [filters, setSearchParams]);

    const updateFilters = useCallback((newFilters: Partial<GamesFilters>) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            ...newFilters,
        }));
    }, []);

    const value = useMemo(
        () => ({
            filters,
            updateFilters,
        }),
        [filters, updateFilters]
    );

    return <GamesFiltersContext.Provider value={value}>{children}</GamesFiltersContext.Provider>;
};

export default GamesFiltersProvider;
