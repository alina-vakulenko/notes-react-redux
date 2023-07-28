import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Note, NotesState } from "./types";

export const initialState: NotesState = {
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

export const notesSlice = createSlice({
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
                        dates: "",
                    },
                };
            },
        },
        noteEdited(state: NotesState, action: PayloadAction<Note>) {
            const noteIndex = state.notesList.findIndex(
                (note: Note) => note.id === action.payload.id
            );
            state.notesList[noteIndex] = action.payload;
        },
        noteRemoved(state: NotesState, action: PayloadAction<string>) {
            state.notesList = state.notesList.filter(
                (note: Note) => note.id !== action.payload
            );
        },
        noteArchived(state: NotesState, action: PayloadAction<string>) {
            const matchingNote: Note | undefined = state.notesList.find(
                (note: Note) => note.id === action.payload
            );
            if (matchingNote) {
                matchingNote.archived === true;
            }
        },
        noteUnarchived(state: NotesState, action: PayloadAction<string>) {
            const matchingNote: Note | undefined = state.notesList.find(
                (note: Note) => note.id === action.payload
            );
            if (matchingNote) {
                matchingNote.archived === false;
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

export const selectAllNotes = (state: RootState): Note[] =>
    state.notes.notesList;
export const selectArchivedNotes = (state: RootState): Note[] =>
    state.notes.notesList.filter((note: Note) => note.archived);
export const selectActiveNotes = (state: RootState): Note[] =>
    state.notes.notesList.filter((note: Note) => !note.archived);

export default notesSlice.reducer;
