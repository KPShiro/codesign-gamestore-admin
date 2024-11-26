import { Game } from '@features/games-catalog/models/game';
import { randomizeGameData } from '@features/games-catalog/utils';
import { useEffect, useState } from 'react';

export const useGames = (limit: number = 5) => {
    const [games, setGames] = useState<Game[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        const games: Game[] = [
            randomizeGameData({
                publishStatus: 'PUBLISHED',
            }),
            randomizeGameData({
                publishStatus: 'TESTING',
            }),
        ];

        const gamesCount = limit - games.length;
        for (let i = 0; i < gamesCount; i++) {
            games.push(randomizeGameData());
        }

        setTimeout(() => {
            setGames([...games.sort((a, b) => a.title.localeCompare(b.title))]);
            setIsLoading(false);
        }, 500);
    }, [limit]);

    return { data: games, isLoading };
};
