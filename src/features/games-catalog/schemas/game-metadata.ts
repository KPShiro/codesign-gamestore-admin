import { z } from 'zod';
import { GamePublishStatuses } from '../models/game-publish-status';
import { ThumbnailSchema } from './thumbnail';

const GameMetadataFormSchema = z.object({
    title: z.string().min(1).max(80),
    thumbnail: ThumbnailSchema,
    status: z.enum(GamePublishStatuses),
});

type GameMetadataFormData = z.infer<typeof GameMetadataFormSchema>;

export { GameMetadataFormSchema, type GameMetadataFormData };
