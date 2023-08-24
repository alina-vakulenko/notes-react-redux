import { useSearchParams } from "react-router-dom";
import { MouseEvent } from "react";
import { CategoryEnum } from "../types";
import Dialog from "../../components/dialog/Dialog";
import NameInput from "../../components/form/NameInput";
import CategoryInput from "../../components/form/CategoryInput";
import ContentInput from "../../components/form/ContentInput";
import ErrorBlock from "../../components/form/ErrorBlock";
import { useNoteForm } from "../../hooks/useNoteForm";
import { useTableActions } from "../../hooks/useTableActions";
import type { Note } from "../../redux/notes/types";
import { useAppSelector } from "../../redux/hooks";
import { selectActiveNotes } from "../../redux/notes/notesSlice";

const NoteFormModal = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const selectedNoteId = searchParams.get("note");
    const activeNotes = useAppSelector(selectActiveNotes);
    let selectedNote: Note | undefined;
    if (selectedNoteId) {
        selectedNote = activeNotes.find((note) => note.id === selectedNoteId);
    }
    const { formData, errors, validateFormData, handleChange, resetNoteForm } =
        useNoteForm(selectedNote);

    const { onAdd, onEdit } = useTableActions();

    const handleClose = () => {
        const selectedNoteId = searchParams.get("note");
        if (selectedNoteId) {
            searchParams.delete("note");
            setSearchParams(searchParams);
        }
        searchParams.delete("createNote");
        setSearchParams(searchParams);
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validatedFormData = validateFormData();
        if (!validatedFormData) return false;

        if (selectedNote) {
            onEdit(selectedNote, validatedFormData);
        } else {
            onAdd(validatedFormData);
        }
        resetNoteForm();
        return true;
    };

    return (
        <Dialog
            title={selectedNote ? "Edit note" : "Create note"}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
        >
            <form className="flex flex-col gap-3 w-full">
                <NameInput value={formData.name} onChange={handleChange} />
                <CategoryInput
                    categories={Object.values(CategoryEnum)}
                    value={formData.category}
                    onChange={handleChange}
                />
                <ContentInput
                    value={formData.content}
                    onChange={handleChange}
                />
                {errors.length > 0 && <ErrorBlock errors={errors} />}
            </form>
        </Dialog>
    );
};

export default NoteFormModal;
