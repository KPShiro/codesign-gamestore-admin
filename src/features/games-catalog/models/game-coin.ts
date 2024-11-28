const GameCoins = ['GC', 'SC'] as const;
type GameCoin = (typeof GameCoins)[number];

const GameCoinsLabels = new Map<GameCoin, string>([
    ['SC', 'Sweeps'],
    ['GC', 'Gold'],
]);

export { GameCoins, GameCoinsLabels, type GameCoin };

