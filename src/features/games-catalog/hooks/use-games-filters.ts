import { useFilters } from '@/hooks/use-filters';
import { GamePublishStatus } from '@features/games-catalog/models/game-publish-status';

export type GamesFilters = {
    search: string;
    publishStatus: GamePublishStatus;
};

export const useGamesFilters = () => {
    return useFilters<GamesFilters>();
};
