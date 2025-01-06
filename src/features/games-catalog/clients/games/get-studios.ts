import { Randomize } from '@/utils/randomizer';
import { GameStudio } from '../../models/game-studio';

export const GAME_STUDIOS: GameStudio[] = [
    {
        id: '0000-0000-0000-0000',
        name: 'Golden Feather Studios',
    },
    {
        id: '0000-0000-0000-0001',
        name: 'CD Project RED',
    },
    {
        id: '0000-0000-0000-0002',
        name: 'Industrial Studios',
    },
];

export default function getStudios() {
    return new Promise<GameStudio[]>((res) => {
        setTimeout(() => res(GAME_STUDIOS), Randomize.number(500, 1000));
    });
}
