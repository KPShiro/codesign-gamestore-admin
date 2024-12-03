import { GameStudio } from '@features/games-catalog/models/game-studio';
import { GAME_STUDIOS } from '@features/games-catalog/utils';
import { useEffect, useState } from 'react';

export const useGamesStudios = () => {
    const [studios, setStudios] = useState<GameStudio[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setStudios([...GAME_STUDIOS.sort((a, b) => a.name.localeCompare(b.name))]);
            setIsLoading(false);
        }, 500);
    }, []);

    return { data: studios, isLoading };
};
