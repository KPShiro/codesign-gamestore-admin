import { z } from 'zod';

const GameConfigurationFormSchema = z.object({
    rtp: z.number().positive().max(100),
    maxWin: z.number().positive(),
});

type GameConfigurationFormData = z.infer<typeof GameConfigurationFormSchema>;

export { GameConfigurationFormSchema, type GameConfigurationFormData };
