import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { GameProvider } from '../../models/game-provider';

export default async function getProviders() {
    const response = await axios.get<GameProvider[]>(
        `${import.meta.env.VITE_API_BASE_URL}/providers`
    );

    return new Promise<GameProvider[]>((res) => {
        setTimeout(() => res(response.data), Randomize.number(500, 1000));
    });
}
