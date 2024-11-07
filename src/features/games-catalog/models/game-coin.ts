const GameCoins = ['GC', 'SC'] as const;
type GameCoin = (typeof GameCoins)[number];

export { GameCoins, type GameCoin };
