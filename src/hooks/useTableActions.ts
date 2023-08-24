import {
    noteAdded,
    noteEdited,
    noteArchivedStatusToggled,
    noteRemoved,
} from "../redux/notes/notesSlice";
import { useAppDispatch } from "../redux/hooks";
import type { Note } from "../redux/notes/types";

export const useTableActions = () => {
    const dispatch = useAppDispatch();

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

    const onStatusChange = (note: Note) => {
        dispatch(noteArchivedStatusToggled(note.id));
    };

    const onRemove = (note: Note) => {
        dispatch(noteRemoved(note.id));
    };

    return {
        onAdd,
        onEdit,
        onStatusChange,
        onRemove,
    };
};
