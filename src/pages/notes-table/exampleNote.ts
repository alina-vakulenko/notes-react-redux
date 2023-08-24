import type { Note } from "../types";

export const exampleNote: Note = {
    id: "exampleId",
    name: "Example name",
    created: new Date().toISOString(),
    category: "Task",
    content: "Description",
    dates: "",
    archived: false,
};
