import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { Game } from '../../models/game';

export default async function getGames() {
    const response = await axios.get<Game[]>(
        `${import.meta.env.VITE_API_BASE_URL}/games?_expand=studio&_expand=provider`
    );

    return new Promise<Game[]>((res) => {
        setTimeout(() => res(response.data), Randomize.number(500, 1000));
    });
}
