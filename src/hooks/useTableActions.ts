import {
    noteAdded,
    noteEdited,
    noteArchived,
    noteUnarchived,
    noteRemoved,
} from "../redux/notes/notesSlice";
import { useAppDispatch } from "../redux/hooks";

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
        noteId: string,
        data: { name: string; category: string; content: string }
    ) => {
        dispatch(noteEdited(noteId, data.name, data.category, data.content));
    };

    const onArchive = (noteId: string) => {
        dispatch(noteArchived(noteId));
    };

    const onUnarchive = (noteId: string) => {
        dispatch(noteUnarchived(noteId));
    };

    const onRemove = (noteId: string) => {
        dispatch(noteRemoved(noteId));
    };

    return {
        onAdd,
        onEdit,
        onArchive,
        onUnarchive,
        onRemove,
    };
};
