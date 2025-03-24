import { z } from "zod";

export const createFoodItemSchema = z.object({
    name: z.string().min(1).max(191),
    protein: z.number().min(0),
    fat: z.number().min(0),
    carbs: z.number().min(0),
    calories: z.number().min(0),
});
