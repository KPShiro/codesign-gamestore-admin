const GamePublishStatuses = ['NEW', 'TESTING', 'PUBLISHED', 'ARCHIVED'] as const;

type GamePublishStatus = (typeof GamePublishStatuses)[number];

export { GamePublishStatuses, type GamePublishStatus };
