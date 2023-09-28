import { useAppDispatch } from "@/redux/hooks";
import {
    fetchNotes,
    addNote,
    updateNote,
    deleteNote,
    toggleNoteStatus,
} from "@/redux/notes/notesSlice";
import { CreateNoteInput, UpdateNoteInput, NoteId } from "./../api/schemas";

export const useRowActions = () => {
    const dispatch = useAppDispatch();

    const onLoad = () => {
        dispatch(fetchNotes());
    };

    const onAdd = (data: CreateNoteInput) => {
        dispatch(addNote(data));
    };

    const onEdit = (data: UpdateNoteInput) => {
        dispatch(updateNote({ noteId: data.noteId, values: data.values }));
    };

    const onArchived = (noteId: NoteId) => {
        dispatch(toggleNoteStatus(noteId));
    };

    const onUnarchived = (noteId: NoteId) => {
        dispatch(toggleNoteStatus(noteId));
    };

    const onRemove = (noteId: NoteId) => {
        dispatch(deleteNote(noteId));
    };

    return {
        onLoad,
        onAdd,
        onEdit,
        onArchived,
        onUnarchived,
        onRemove,
    };
};
