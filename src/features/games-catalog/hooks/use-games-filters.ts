import { isNotDefined } from '@/utils';
import { GamePublishStatus } from '@features/games-catalog/models/game-publish-status';
import { createContext, useContext } from 'react';

type GamesFilters = {
    search: string | undefined;
    publishStatus: GamePublishStatus | undefined;
};

type GamesFiltersContext = {
    filters: GamesFilters;
    isFiltering: boolean;
    updateFilters: (filters: Partial<GamesFilters>) => void;
    resetFilters: () => void;
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
