import { Randomize } from '@/utils/randomizer';
import { GameProvider } from '../../models/game-provider';

export const GAME_PROVIDERS: GameProvider[] = [
    {
        id: '0000-0000-0000-0000',
        name: 'Golden Games',
    },
    {
        id: '0000-0000-0000-0001',
        name: 'CD Project',
    },
    {
        id: '0000-0000-0000-0002',
        name: 'Ducking Amazing',
    },
];

export default function getProviders() {
    return new Promise<GameProvider[]>((res) => {
        setTimeout(() => res(GAME_PROVIDERS), Randomize.number(500, 1000));
    });
}
