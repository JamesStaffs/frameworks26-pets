import { z } from 'zod';

export const petSchema = z.object({
    animalName: z.string().min(1, 'Animal name is required'),
    animalPic: z.string().url('Must be a valid image URL'),
    animalAge: z.string().regex(/^\d+$/, 'Age must be a number'),
    animalType: z.string().min(1, 'Animal type is required'),
    animalBreed: z.string()
});

export const petUpdateSchema = petSchema.partial();