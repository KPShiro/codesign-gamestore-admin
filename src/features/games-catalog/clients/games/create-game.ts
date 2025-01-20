import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { Game } from '../../models/game';

type CreateGameArg = {
    providerId: string;
    studioId: string;
} & Omit<Game, 'id' | 'provider' | 'studio' | 'publishStatus' | 'thumbnail' | 'coins' | 'tags'>;

export default async function createGame(data: CreateGameArg) {
    const response = await axios.post<Game>(`${import.meta.env.VITE_API_BASE_URL}/games`, {
        ...data,
        id: Randomize.string(),
        publishStatus: 'NOT_PUBLISHED',
        // TODO: Add COINS to the createGameForm
        coins: ['GC'],
        // TODO: Add TAGS to the createGameForm
        // Should tags be objects rather that simple string?
        tags: [],
    });

    return new Promise<Game>((res) => {
        setTimeout(() => res(response.data), Randomize.number(500, 1000));
    });
}
