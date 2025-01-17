import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { Game } from '../../models/game';
import { GameCoin } from '../../models/game-coin';
import { GamePublishStatus } from '../../models/game-publish-status';

type CreateGameArg = {
    id: string;
    thumbnail: string;
    title: string;
    providerId: string;
    studioId: string;
    publishStatus: GamePublishStatus;
    coins: GameCoin[];
    tags: string[];
    rtp: number;
    win: {
        min: number;
        max: number;
    };
};

export default async function createGame() {
    // TODO: FIX THIS
    const response = await axios.post<Game>(`${import.meta.env.VITE_API_BASE_URL}/games`, {
        id: '9999-9999-9999-9999',
        thumbnail:
            'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png',
        title: 'AAAAAAAAAAA',
        providerId: '0000-0000-0000-0001',
        studioId: '0000-0000-0000-0001',
        publishStatus: 'NOT_PUBLISHED',
        coins: ['GC', 'SC'],
        tags: ['theme:witcher', 'theme:rpg', 'feat:coins', 'feat:spins'],
        rtp: 0.98,
        win: {
            min: 900,
            max: 1000,
        },
    } satisfies CreateGameArg);

    return new Promise<Game>((res) => {
        setTimeout(() => res(response.data), Randomize.number(500, 1000));
    });
}
