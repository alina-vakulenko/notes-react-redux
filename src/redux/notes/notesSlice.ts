import {
    createSlice,
    PayloadAction,
    nanoid,
    createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Note, NotesState } from "./types";
import { parseDates } from "../../utils/parseDates";

const initialState: NotesState = {
    notesList: [
        {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, bread, eggs",
            dates: "",
            archived: false,
        },
        {
            id: "1",
            name: "The theory of evolution",
            created: "April 27, 2021",
            category: "Random Thought",
            content: "Worth reading",
            dates: "",
            archived: false,
        },
        {
            id: "2",
            name: "Appointment",
            created: "May 05, 2021",
            category: "Task",
            content:
                "I’m gonna have a dentist appointment on the 5/10/2021, I moved it from 5/12/2021",
            dates: "5/10/2021, 5/12/2021",
            archived: false,
        },
        {
            id: "3",
            name: "Library",
            created: "May 15, 2021",
            category: "Task",
            content: "Return three books to the library",
            dates: "",
            archived: false,
        },
        {
            id: "4",
            name: "Order birthday cake",
            created: "May 17, 2021",
            category: "Task",
            content: "Should be ready by 6/1/2021",
            dates: "6/1/2021",
            archived: false,
        },
        {
            id: "5",
            name: "New css trick",
            created: "May 20, 2021",
            category: "Idea",
            content: "Try it out on my pet project",
            dates: "",
            archived: false,
        },
        {
            id: "6",
            name: "New feature",
            created: "May 25, 2021",
            category: "Task",
            content: "Refactor code",
            dates: "",
            archived: true,
        },
    ],
};

const notesSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        noteAdded: {
            reducer(state: NotesState, action: PayloadAction<Note>) {
                state.notesList.push(action.payload);
            },
            prepare(name: string, category: string, content: string) {
                return {
                    payload: {
                        name,
                        category,
                        content,
                        id: nanoid(),
                        created: new Date().toISOString(),
                        archived: false,
                        dates: parseDates(content),
                    },
                };
            },
        },
        noteEdited: {
            reducer(
                state: NotesState,
                action: PayloadAction<{
                    id: string;
                    data: {
                        name: string;
                        category: string;
                        content: string;
                        dates: string;
                    };
                }>
            ) {
                const noteIndex: number = state.notesList.findIndex(
                    (note: Note) => note.id === action.payload.id
                );

                if (noteIndex !== -1) {
                    state.notesList[noteIndex] = {
                        ...state.notesList[noteIndex],
                        ...action.payload.data,
                    };
                }
            },
            prepare(
                id: string,
                name: string,
                category: string,
                content: string
            ) {
                return {
                    payload: {
                        id,
                        data: {
                            name,
                            category,
                            content,
                            dates: parseDates(content),
                        },
                    },
                };
            },
        },
        noteRemoved(state: NotesState, action: PayloadAction<string>) {
            state.notesList = state.notesList.filter(
                (note: Note) => note.id !== action.payload
            );
        },
        noteArchived(state: NotesState, action: PayloadAction<string>) {
            const noteIndex: number = state.notesList.findIndex(
                (note: Note) => note.id === action.payload
            );
            if (noteIndex !== -1) {
                state.notesList[noteIndex].archived = true;
            }
        },
        noteUnarchived(state: NotesState, action: PayloadAction<string>) {
            const noteIndex: number = state.notesList.findIndex(
                (note: Note) => note.id === action.payload
            );
            if (noteIndex !== -1) {
                state.notesList[noteIndex].archived = false;
            }
        },
    },
});

export const {
    noteAdded,
    noteEdited,
    noteRemoved,
    noteArchived,
    noteUnarchived,
} = notesSlice.actions;

const selectNotes = (state: RootState) => state.notes.notesList;

const selectCategories = createSelector([selectNotes], (notes) => {
    const uniqueCategories = new Set<string>();
    notes.map((note) => uniqueCategories.add(note.category));
    return uniqueCategories;
});

const selectActiveNotes = createSelector([selectNotes], (notes) =>
    notes.filter((note) => !note.archived)
);

const selectArchivedNotes = createSelector([selectNotes], (notes) =>
    notes.filter((note) => note.archived)
);

const selectNotesStats = createSelector(
    [(state) => state.notes.notesList],
    (notes) => {
        const result: {
            [category: string]: Record<string, number>;
        } = {};

        for (const note of notes) {
            const category = note.category;
            const status = note.archived ? "archived" : "active";
            if (!result[category]) {
                result[category] = {};
            }
            if (!result[category][status]) {
                result[category][status] = 0;
            }
            result[category][status]++;
        }

        return result;
    }
);

export {
    notesSlice,
    selectNotes,
    selectActiveNotes,
    selectArchivedNotes,
    selectNotesStats,
    selectCategories,
};

export default notesSlice.reducer;
