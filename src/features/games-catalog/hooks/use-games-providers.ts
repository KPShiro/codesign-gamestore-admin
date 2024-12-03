import { GameProvider } from '@features/games-catalog/models/game-provider';
import { GAME_PROVIDERS } from '@features/games-catalog/utils';
import { useEffect, useState } from 'react';

export const useGamesProviders = () => {
    const [providers, setProiders] = useState<GameProvider[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setProiders([...GAME_PROVIDERS.sort((a, b) => a.name.localeCompare(b.name))]);
            setIsLoading(false);
        }, 500);
    }, []);

    return { data: providers, isLoading };
};
