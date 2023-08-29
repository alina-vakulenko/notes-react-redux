import { useSearchParams } from "react-router-dom";
import {
    noteAdded,
    noteEdited,
    noteArchived,
    noteUnarchived,
    noteRemoved,
} from "../redux/notes/notesSlice";
import { useAppDispatch } from "../redux/hooks";

export const useNoteTableActions = () => {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const showArchivedNotes = searchParams.has("withArchived");

    const toggleShowArchivedNotes = () => {
        if (showArchivedNotes) {
            searchParams.delete("withArchived");
            setSearchParams(searchParams);
        } else {
            setSearchParams({ ...searchParams, withArchived: "y" });
        }
    };

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
        showArchivedNotes,
        toggleShowArchivedNotes,
    };
};