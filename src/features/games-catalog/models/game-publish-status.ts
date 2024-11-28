const GamePublishStatuses = ['NOT_PUBLISHED', 'TESTING', 'PUBLISHED'] as const;

type GamePublishStatus = (typeof GamePublishStatuses)[number];

const GamePublishStatusLabels = new Map<GamePublishStatus, string>([
    ['NOT_PUBLISHED', 'Not Published'],
    ['PUBLISHED', 'Published'],
    ['TESTING', 'Testing'],
]);

export { GamePublishStatusLabels, GamePublishStatuses, type GamePublishStatus };
