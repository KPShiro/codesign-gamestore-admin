import { isNotDefined } from '@/utils';
import { createContext, useContext } from 'react';

type GamesFilters = {
    search: string;
};

type GamesFiltersContext = {
    filters: GamesFilters;
    updateFilters: (filters: Partial<GamesFilters>) => void;
};

const GamesFiltersContext = createContext<GamesFiltersContext | null>(null);

const useGamesFilters = () => {
    const context = useContext(GamesFiltersContext);

    if (isNotDefined(context)) {
        throw new Error('Have to be used within the GamesFiltersContext!');
    }

    return context;
};

export { GamesFiltersContext, useGamesFilters, type GamesFilters };
