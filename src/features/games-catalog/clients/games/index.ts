import createGame from './create-game';
import deleteGame from './delete-game';
import getGames from './get-games';
import getProviders from './get-providers';
import getStudios from './get-studios';

export const GamesClient = {
    getProviders,
    getStudios,
    getGames,
    createGame,
    deleteGame,
};
