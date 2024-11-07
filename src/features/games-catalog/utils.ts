import { User } from '@/models/user';
import { isNotDefined } from '@/utils';
import { Game } from './models/game';
import { GameCoin, GameCoins } from './models/game-coin';
import { GameProvider } from './models/game-provider';
import { GamePublishStatuses } from './models/game-publish-status';
import { GameStudio } from './models/game-studio';

export const GAME_TITLES: string[] = [
    'The Witcher',
    'League of Legends',
    'Talisman',
    'Baldurs Gate 3',
    'Amazing Tallents',
];

export const GAME_THUMBNAIL: string[] = [
    'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png',
    'https://www.enworld.org/media/baldurs-gate-3-preview-01-header-jpg.110573/full',
    'https://e7.pngegg.com/pngimages/897/944/png-clipart-league-of-legends-cool-backgrounds-desktop-video-game-riot-games-league-of-legends-game-text-thumbnail.png',
    'https://scytheofseraph.com/assets/news-assets/content-page_images_csgo-2-teams-2019_thumbnail.jpeg',
    'https://i.ytimg.com/vi/E3Huy2cdih0/maxresdefault.jpg',
];

export const GAME_PROVIDERS: GameProvider[] = [
    {
        id: '0000',
        name: 'Golden Games',
    },
    {
        id: '0001',
        name: 'Amazing Studios',
    },
    {
        id: '0002',
        name: 'Ducking Amazing',
    },
];

export const GAME_STUDIOS: GameStudio[] = [
    {
        id: '0000',
        name: 'Golden Feather Studios',
    },
    {
        id: '0001',
        name: 'CD Project RED',
    },
    {
        id: '0002',
        name: 'Industrial Gaming Studio',
    },
];

export const USERS: User[] = [
    {
        id: '0000',
        fullName: 'Peter Parker',
        email: 'peter.parker@stark.ind',
    },
    {
        id: '0001',
        fullName: 'Anthony Stark',
        email: 'iron.man@stark.ind',
    },
    {
        id: '0002',
        fullName: 'Natasha Romanov',
        email: 'natasha.romanov@shield.com',
    },
];

export const TAGS: string[] = [
    'feat:coins',
    'feat:chumba',
    'feat:spins',
    'theme:dark',
    'theme:light',
    'theme:crimson_red',
];

// ----------------------------------------

export const randomizeNumber = (min: number, max: number) => {
    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomizeFloatNumber = (min: number, max: number) => {
    if (min > max) {
        [min, max] = [max, min];
    }

    return Math.random() * (max - min) + min;
};

export const randomizeString = (length: number = 16) => {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
};

export const randomizeArrayElement = <T = unknown>(array: T[]): T => {
    const randomIndex = randomizeNumber(0, array.length - 1);

    return array[randomIndex];
};

export const randomizeArrayElements = <T = unknown>(
    array: T[],
    min: number = 0,
    max?: number
): T[] => {
    const elements = new Set<T>();

    if (isNotDefined(max)) {
        max = randomizeNumber(min, array.length);
    }

    for (let i = 0; i < max; i++) {
        const randomIndex = randomizeNumber(0, array.length - 1);
        elements.add(array[randomIndex]);
    }

    return [...elements];
};

// ----------------------------------------

export const randomizeGameData = (options?: Partial<Game>): Game => {
    return {
        id: options?.id || randomizeString(),
        thumbnail: options?.thumbnail || randomizeArrayElement(GAME_THUMBNAIL),
        title: options?.title || randomizeArrayElement(GAME_TITLES),
        provider: options?.provider || randomizeArrayElement(GAME_PROVIDERS),
        studio: options?.studio || randomizeArrayElement(GAME_STUDIOS),
        publishStatus: options?.publishStatus || randomizeArrayElement([...GamePublishStatuses]),
        updatedAt: options?.updatedAt || Date.now(),
        updatedBy: options?.updatedBy || randomizeArrayElement(USERS),
        coins: options?.coins || [
            ...new Set<GameCoin>(['GC', ...randomizeArrayElements([...GameCoins])]),
        ],
        tags: options?.tags || randomizeArrayElements(TAGS),
        rtp: options?.rtp || randomizeFloatNumber(0.8, 0.98),
        win: options?.win || {
            min: randomizeNumber(0, 1000),
            max: randomizeNumber(1000, 10000),
        },
    };
};
