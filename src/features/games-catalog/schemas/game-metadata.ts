import { GamePublishStatuses } from '@features/games-catalog/models/game-publish-status';
import { ThumbnailSchema } from '@features/games-catalog/schemas/thumbnail';
import { z } from 'zod';

const GameMetadataFormSchema = z.object({
    title: z.string().min(1).max(80),
    thumbnail: ThumbnailSchema,
    status: z.enum(GamePublishStatuses),
    studioId: z.string().min(1),
    providerId: z.string().min(1),
});

type GameMetadataFormData = z.infer<typeof GameMetadataFormSchema>;

export { GameMetadataFormSchema, type GameMetadataFormData };
