import { z } from 'zod';

const GameConfigurationFormSchema = z.object({
    rtp: z.number().positive().max(100),
    maxWin: z.number().positive().int().min(1000).max(100_000),
});

type GameConfigurationFormData = z.infer<typeof GameConfigurationFormSchema>;

export { GameConfigurationFormSchema, type GameConfigurationFormData };

