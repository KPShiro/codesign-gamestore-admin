import { GameCoin } from './game-coin';
import { GameProvider } from './game-provider';
import { GamePublishStatus } from './game-publish-status';
import { GameStudio } from './game-studio';

type Game = {
    id: string;
    title: string;
    thumbnail: string;
    provider: GameProvider;
    studio: GameStudio;
    coins: GameCoin[];
    publishStatus: GamePublishStatus;
    tags: string[];
    rtp: number;
    win: {
        min: number;
        max: number;
    };
};

export { type Game };
