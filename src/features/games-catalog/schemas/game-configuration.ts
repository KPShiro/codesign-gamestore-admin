import { z } from 'zod';

const GameConfigurationFormSchema = z.object({
    rtp: z.number().min(0).max(100),
    win: z.object({
        min: z.number().int().min(0),
        max: z.number().int().min(0),
    }),
});

type GameConfigurationFormData = z.infer<typeof GameConfigurationFormSchema>;

export { GameConfigurationFormSchema, type GameConfigurationFormData };
