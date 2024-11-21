import { Game } from '@features/games-catalog/models/game';
import { randomizeGameData } from '@features/games-catalog/utils';
import { useEffect, useState } from 'react';

export const useGames = (limit: number = 5) => {
    const [games, setGames] = useState<Game[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const games: Game[] = [];
        setIsLoading(true);

        for (let i = 0; i < limit; i++) {
            games.push(randomizeGameData());
        }

        setTimeout(() => {
            setGames([...games.sort((a, b) => a.title.localeCompare(b.title))]);
            setIsLoading(false);
        }, 500);
    }, [limit]);

    return { data: games, isLoading };
};
