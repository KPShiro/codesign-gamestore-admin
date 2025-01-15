import { Randomize } from '@/utils/randomizer';
import axios from 'axios';
import { GameStudio } from '../../models/game-studio';

export default async function getStudios() {
    const response = await axios.get<GameStudio[]>(`${import.meta.env.VITE_API_BASE_URL}/studios`);

    return new Promise<GameStudio[]>((res) => {
        setTimeout(() => res(response.data), Randomize.number(500, 1000));
    });
}
