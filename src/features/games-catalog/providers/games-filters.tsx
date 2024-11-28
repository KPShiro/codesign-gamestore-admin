import { isDefined } from '@/utils';
import { GamesFilters, GamesFiltersContext } from '@features/games-catalog/hooks/use-games-filters';
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GamePublishStatus } from '../models/game-publish-status';

const DEFAULT_FILTERS: GamesFilters = {
    search: undefined,
    publishStatus: undefined,
};

const GamesFiltersProvider = ({ children }: PropsWithChildren) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isFiltering, setIsFiltering] = useState<boolean>(searchParams.size > 0);
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
                .filter(([, value]) => isDefined(value) && value !== '')
                .map(([key, value]) => [encodeURIComponent(key), encodeURIComponent(String(value))])
        );

        setIsFiltering(Object.entries(activeFilters).length > 0);
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
            isFiltering,
            updateFilters,
            resetFilters,
        }),
        [filters, isFiltering, updateFilters, resetFilters]
    );

    return <GamesFiltersContext.Provider value={value}>{children}</GamesFiltersContext.Provider>;
};

export default GamesFiltersProvider;
