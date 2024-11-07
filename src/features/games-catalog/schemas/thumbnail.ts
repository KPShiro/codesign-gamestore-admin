import { isNotDefined } from '@/utils';
import { z } from 'zod';

const ImageFileTypeSchema = z.string().regex(/^image\//);

const ThumbnailSchema = z
    .instanceof(File)
    .refine((file) => {
        return !isNotDefined(file);
    }, 'Thumbnail is required')
    .refine((file) => {
        return file.size <= 1024 * 1024 * 3;
    }, 'Thumbnail size cannot exceed 3MB')
    .refine((file) => {
        return ImageFileTypeSchema.safeParse(file.type);
    }, 'Thumbnail has to be an image');

export { ThumbnailSchema };
