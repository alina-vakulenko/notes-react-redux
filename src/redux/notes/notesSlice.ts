import {
    createSlice,
    PayloadAction,
    nanoid,
    createSelector,
} from "@reduxjs/toolkit";
import { parseDates } from "@/utils/parseDates";
import { RootState } from "../store";
import { initialState } from "./initialState";
import { Note, NotesState } from "./types";

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
    selectActiveNotes,
    selectNotesStats,
    selectCategories,
    selectNotes,
};

export default notesSlice.reducer;
