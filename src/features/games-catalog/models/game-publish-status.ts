const GamePublishStatuses = ['NOT_PUBLISHED', 'TESTING', 'PUBLISHED'] as const;

type GamePublishStatus = (typeof GamePublishStatuses)[number];

export { GamePublishStatuses, type GamePublishStatus };

