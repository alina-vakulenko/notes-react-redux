import {
    createSlice,
    PayloadAction,
    createSelector,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { NoteService } from "@/api/NoteService";
import { isLoading, isError } from "../utils";
import {
    RequestStatus,
    Note,
    FetchNotesInput,
    CreateNoteResponse,
    FetchNotesResponse,
    CreateNoteInput,
    UpdateNoteResponse,
    UpdateNoteInput,
    ToggleNoteStatusInput,
    DeleteNoteResponse,
    DeleteNoteInput,
} from "@/api/schemas";

type NotesState = {
    status: RequestStatus;
    error: string | null;
    notesList: Note[];
    notesCount: number;
};

export const initialState: NotesState = {
    status: "idle",
    error: null,
    notesList: [] as Note[],
    notesCount: 0,
};

export const fetchNotes = createAsyncThunk<
    FetchNotesResponse,
    FetchNotesInput,
    { rejectValue: string }
>("notes/fetchNotes", async (_, { rejectWithValue }) => {
    try {
        return await NoteService.getAll();
    } catch (err: unknown) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to load notes. " + err.message);
        }
        return "Failed to load notes. Server error.";
    }
});

export const addNote = createAsyncThunk<
    CreateNoteResponse,
    CreateNoteInput,
    { rejectValue: string }
>("notes/addNote", async (note, { rejectWithValue }) => {
    try {
        return await NoteService.create(note);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to add note. " + err.message);
        }
        return "Failed to add note. Server error";
    }
});

export const updateNote = createAsyncThunk<
    UpdateNoteResponse,
    UpdateNoteInput,
    { rejectValue: string }
>("notes/updateNote", async (args, { rejectWithValue }) => {
    try {
        return await NoteService.update(args);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to update note. " + err.message);
        }
        return "Failed to update note. Server error";
    }
});

export const toggleNoteStatus = createAsyncThunk<
    UpdateNoteResponse,
    ToggleNoteStatusInput,
    { rejectValue: string; state: { notes: NotesState } }
>("notes/toggleNoteStatus", async (noteId, { rejectWithValue, getState }) => {
    const todo = getState().notes.notesList.find((note) => note.id === noteId);
    if (!todo) {
        return rejectWithValue("No such note found");
    }
    try {
        return await NoteService.update({
            noteId,
            values: {
                archived: !todo.archived,
            },
        });
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue(
                "Failed to toggle note's status. " + err.message
            );
        }
        return "Failed to toggle note's status. Server error";
    }
});

export const deleteNote = createAsyncThunk<
    DeleteNoteResponse,
    DeleteNoteInput,
    { rejectValue: string }
>("notes/deleteNote", async (noteId, { rejectWithValue }) => {
    try {
        return await NoteService.delete(noteId);
    } catch (err) {
        if (err instanceof Error) {
            return rejectWithValue("Failed to delete note. " + err.message);
        }
        return "Failed to delete note. Server error";
    }
});

const notesSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notesList = action.payload.notes;
                state.notesCount = action.payload.count;
            })
            .addCase(addNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notesList.push(action.payload);
                state.notesCount += 1;
            })
            .addCase(updateNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                const existingNoteIndex: number = state.notesList.findIndex(
                    (note: Note) => note.id === action.payload.id
                );

                if (existingNoteIndex !== -1) {
                    state.notesList[existingNoteIndex] = action.payload;
                }
            })
            .addCase(deleteNote.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.notesList = state.notesList.filter(
                    (note: Note) => note.id !== action.payload.id
                );
                state.notesCount -= 1;
            })
            .addCase(toggleNoteStatus.fulfilled, (state, action) => {
                state.status = "succeeded";
                const existingNote: Note | undefined = state.notesList.find(
                    (note: Note) => note.id === action.payload.id
                );
                if (existingNote) {
                    existingNote.archived = !existingNote.archived;
                }
            })
            .addMatcher(isLoading, (state) => {
                state.status = "loading";
                state.notesList = [];
                state.notesCount = 0;
                state.error = null;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.status = "failed";
                state.error = action.payload;
                state.notesList = [];
                state.notesCount = 0;
            });
    },
});

const selectNotes = (state: RootState) => state.notes.notesList;
const selectNoteById = (state: RootState, noteId: string) =>
    state.notes.notesList.find((note) => note.id === noteId);

const selectActiveNotes = createSelector([selectNotes], (notes) =>
    notes.filter((note) => !note.archived)
);

const selectNotesStats = createSelector([selectNotes], (notes) => {
    const result: {
        [category: string]: Record<string, number>;
    } = {};

    for (const note of notes) {
        const category = note.category;
        const status = note.archived ? "archived" : "active";
        if (!result[category.name]) {
            result[category.name] = {};
        }
        if (!result[category.name][status]) {
            result[category.name][status] = 0;
        }
        result[category.name][status]++;
    }

    return result;
});

export {
    notesSlice,
    selectActiveNotes,
    selectNotesStats,
    selectNotes,
    selectNoteById,
};

export default notesSlice.reducer;
