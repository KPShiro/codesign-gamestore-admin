import { GamesFilters, GamesFiltersContext } from '@features/games-catalog/hooks/use-games-filters';
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GamePublishStatus } from '../models/game-publish-status';

const DEFAULT_FILTERS: GamesFilters = {
    search: '',
    publishStatus: 'ANY',
};

const GamesFiltersProvider = ({ children }: PropsWithChildren) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState<GamesFilters>({
        ...DEFAULT_FILTERS,
        search: searchParams.get('search') ?? DEFAULT_FILTERS.search,
        publishStatus:
            (searchParams.get('publishStatus') as GamePublishStatus) ??
            DEFAULT_FILTERS.publishStatus,
    });

    useEffect(() => {
        const activeFilters = Object.fromEntries(
            Object.entries(filters)
                .filter(([, value]) => {
                    return value !== '' && value !== null;
                })
                .map(([key, value]) => [encodeURIComponent(key), encodeURIComponent(value)])
        );

        setSearchParams(activeFilters);
    }, [filters, setSearchParams]);

    const updateFilters = useCallback((newFilters: Partial<GamesFilters>) => {
        setFilters((currentFilters) => ({
            ...currentFilters,
            ...newFilters,
        }));
    }, []);

    const resetFilters = useCallback(() => {
        setFilters(() => DEFAULT_FILTERS);
    }, []);

    const value = useMemo(
        () => ({
            filters,
            updateFilters,
            resetFilters,
        }),
        [filters, updateFilters]
    );

    return <GamesFiltersContext.Provider value={value}>{children}</GamesFiltersContext.Provider>;
};

export default GamesFiltersProvider;
