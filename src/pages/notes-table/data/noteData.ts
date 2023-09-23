import { z } from "zod";

export const noteSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must be max 50 characters." }),
    category: z.enum(["task", "idea", "random"]),
    content: z
        .string()
        .min(2, { message: "Content must be at least 2 characters." })
        .max(100, "Content must be max 100 characters."),
});

export type NoteCreateInput = z.infer<typeof noteSchema>;
