import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}

export interface NotesState {
  notesList: Note[];
}

const initialState: NotesState = {};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = notesSlice.actions;

export const selectAllNotes = (state: RootState) => state.notesList;

export default notesSlice.reducer;
