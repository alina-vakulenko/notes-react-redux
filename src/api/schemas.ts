import { z } from "zod";

export const CategorySchema = z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
});

export const NoteSchema = z.object({
    id: z
        .string({
            required_error: "Id is required",
        })
        .uuid({ message: "Invalid id" }),
    name: z
        .string({
            required_error: "Name is required",
        })
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must be max 50 characters." })
        .trim(),
    category: CategorySchema,
    content: z
        .string()
        .min(2, { message: "Content must be at least 2 characters." })
        .max(100, "Content must be max 100 characters.")
        .trim(),
    dates: z.array(z.coerce.date().optional()),
    archived: z.boolean().default(false),
    createdAt: z.coerce.date(),
});

export const CategoryCreateSchema = CategorySchema.pick({ name: true });
export const NoteCreateSchema = NoteSchema.pick({
    name: true,
    content: true,
}).merge(CategoryCreateSchema);

export const CategoryUpdateSchema = CategoryCreateSchema;
export const NoteUpdateSchema = NoteCreateSchema.partial().merge(
    z.object({ archived: z.boolean().optional() })
);

export const NoteIdSchema = z.string().uuid();
export const CategoryIdSchema = z.number();

export type NoteId = z.infer<typeof NoteIdSchema>;
export type Note = z.infer<typeof NoteSchema>;

export type FetchNotesInput = void;
export type GetNoteInput = NoteId;
export type CreateNoteInput = z.infer<typeof NoteCreateSchema>;
export type UpdateNoteInput = {
    noteId: NoteId;
    values: z.infer<typeof NoteUpdateSchema>;
};
export type ToggleNoteStatusInput = NoteId;
export type DeleteNoteInput = NoteId;

export type FetchNotesResponse = { count: number; notes: Note[] };
export type GetNoteResponse = Note;
export type CreateNoteResponse = Note;
export type UpdateNoteResponse = Note;
export type DeleteNoteResponse = { id: NoteId; message: string };

export type CategoryId = z.infer<typeof CategoryIdSchema>;
export type Category = z.infer<typeof CategorySchema>;

export type FetchCategoriesInput = void;
export type CreateCategoryInput = z.infer<typeof CategoryCreateSchema>;
export type UpdateCategoryInput = {
    categoryId: CategoryId;
    values: z.infer<typeof CategoryUpdateSchema>;
};
export type DeleteCategoryInput = CategoryId;

export type FetchCategoriesResponse = {
    count: number;
    categories: Category[];
};
export type CreateCategoryResponse = Category;
export type UpdateCategoryResponse = Category;
export type DeleteCategoryResponse = { id: CategoryId; message: string };

export type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

type AtLeastOne<T extends Record<string, any>> = keyof T extends infer K
    ? K extends string
        ? Pick<T, K & keyof T> & Partial<T>
        : never
    : never;

export type AtLeastOneNoteField = AtLeastOne<Note>;
export type AtLeastOneCategoryField = AtLeastOne<Category>;

export type NoteStats = {
    category: Category;
    active: number;
    archived: number;
};
