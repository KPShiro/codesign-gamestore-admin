import { z } from 'zod';
import { GameConfigurationFormSchema } from './game-configuration';
import { GameMetadataFormSchema } from './game-metadata';

const CreateGameFormSchema = GameMetadataFormSchema.merge(GameConfigurationFormSchema);

type CreateGameFormData = z.infer<typeof CreateGameFormSchema>;

export { CreateGameFormSchema, type CreateGameFormData };
