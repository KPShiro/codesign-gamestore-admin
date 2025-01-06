import { User } from '@/models/user';
import { Randomize } from '@/utils/randomizer';
import { Game } from '../../models/game';
import { GAME_PROVIDERS } from './get-providers';
import { GAME_STUDIOS } from './get-studios';

const USER: User = {
    id: '0000-0000-0000-0000',
    email: 'Natasha Romanov',
    fullName: 'natasha.romanov@shield.com',
};

export const GAMES: Game[] = [
    {
        id: '0000-0000-0000-0000',
        thumbnail:
            'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/PuoMsHLuWRDBlI6dssHMdaqA.png',
        title: 'The Witcher 3',
        provider: GAME_PROVIDERS[1],
        studio: GAME_STUDIOS[1],
        publishStatus: 'PUBLISHED',
        updatedAt: Date.now(),
        updatedBy: USER,
        coins: ['GC', 'SC'],
        tags: ['theme:witcher', 'theme:rpg', 'feat:coins', 'feat:spins'],
        rtp: 0.98,
        win: {
            min: 900,
            max: 1000,
        },
    },
    {
        id: '0000-0000-0000-0001',
        thumbnail: 'https://www.enworld.org/media/baldurs-gate-3-preview-01-header-jpg.110573/full',
        title: 'Baldurs Gate 3',
        provider: GAME_PROVIDERS[0],
        studio: GAME_STUDIOS[0],
        publishStatus: 'TESTING',
        updatedAt: Date.now(),
        updatedBy: USER,
        coins: ['GC'],
        tags: ['theme:dnd', 'feat:spins'],
        rtp: 0.9,
        win: {
            min: 700,
            max: 900,
        },
    },
    {
        id: '0000-0000-0000-0002',
        thumbnail:
            'https://e7.pngegg.com/pngimages/897/944/png-clipart-league-of-legends-cool-backgrounds-desktop-video-game-riot-games-league-of-legends-game-text-thumbnail.png',
        title: 'League of Legends',
        provider: GAME_PROVIDERS[2],
        studio: GAME_STUDIOS[2],
        publishStatus: 'NOT_PUBLISHED',
        updatedAt: Date.now(),
        updatedBy: USER,
        coins: ['GC', 'SC'],
        tags: ['feat:coins'],
        rtp: 0.95,
        win: {
            min: 800,
            max: 900,
        },
    },
    {
        id: '0000-0000-0000-0003',
        thumbnail: 'https://i.ytimg.com/vi/E3Huy2cdih0/maxresdefault.jpg',
        title: 'Elden Ring',
        provider: GAME_PROVIDERS[2],
        studio: GAME_STUDIOS[2],
        publishStatus: 'TESTING',
        updatedAt: Date.now(),
        updatedBy: USER,
        coins: ['GC', 'SC'],
        tags: ['feat:coins'],
        rtp: 0.92,
        win: {
            min: 800,
            max: 900,
        },
    },
    {
        id: '0000-0000-0000-0004',
        thumbnail:
            'https://scytheofseraph.com/assets/news-assets/content-page_images_csgo-2-teams-2019_thumbnail.jpeg',
        title: 'Counter Strinke Global Offensive',
        provider: GAME_PROVIDERS[0],
        studio: GAME_STUDIOS[0],
        publishStatus: 'PUBLISHED',
        updatedAt: Date.now(),
        updatedBy: USER,
        coins: ['GC'],
        tags: ['feat:spins'],
        rtp: 0.85,
        win: {
            min: 700,
            max: 850,
        },
    },
];

export default function getGames() {
    return new Promise<Game[]>((res) => {
        setTimeout(() => res([...GAMES]), Randomize.number(500, 1000));
    });
}
