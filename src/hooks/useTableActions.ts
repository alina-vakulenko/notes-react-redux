import { useSearchParams } from "react-router-dom";
import {
    noteAdded,
    noteEdited,
    noteArchived,
    noteUnarchived,
    noteRemoved,
} from "../redux/notes/notesSlice";
import { useAppDispatch } from "../redux/hooks";
import type { Note } from "../redux/notes/types";

export const useTableActions = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    const openEditForm = (noteId: string) => {
        setSearchParams({
            ...searchParams,
            note: noteId,
        });
    };

    const openCreateForm = () => {
        setSearchParams({ ...searchParams, createNote: "y" });
    };

    const onAdd = (data: {
        name: string;
        category: string;
        content: string;
    }) => {
        dispatch(noteAdded(data.name, data.category, data.content));
    };

    const onEdit = (
        note: Note,
        data: { name: string; category: string; content: string }
    ) => {
        dispatch(noteEdited(note.id, data.name, data.category, data.content));
    };

    const onArchived = (noteId: string) => {
        dispatch(noteArchived(noteId));
    };

    const onUnarchived = (noteId: string) => {
        dispatch(noteUnarchived(noteId));
    };

    const onRemove = (noteId: string) => {
        dispatch(noteRemoved(noteId));
    };

    return {
        onAdd,
        onEdit,
        onArchived,
        onUnarchived,
        onRemove,
        openEditForm,
        openCreateForm,
    };
};
