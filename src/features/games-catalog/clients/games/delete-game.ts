import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { Game } from '../../models/game';

export default async function deleteGame(gameId: Game['id']) {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/games/${gameId}`);

    return new Promise<void>((res) => {
        setTimeout(() => res(), Randomize.number(500, 1000));
    });
}
