import { useEffect, MouseEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryEnum } from "../notes-table/data/categories";
import Dialog from "../../components/dialog/Dialog";
import NameInput from "../../components/form/NameInput";
import CategoryInput from "../../components/form/CategoryInput";
import ContentInput from "../../components/form/ContentInput";
import ErrorBlock from "../../components/form/ErrorBlock";
import { useNoteForm } from "../../hooks/useNoteForm";
import { useRowActions } from "../../hooks/useRowActions";
import type { Note } from "../../redux/notes/types";
import { useAppSelector } from "../../redux/hooks";
import { selectActiveNotes } from "../../redux/notes/notesSlice";

const NoteFormModal = () => {
    const activeNotes = useAppSelector(selectActiveNotes);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const { id } = params;
        if (id) {
            const selectedNote = activeNotes.find((note) => note.id === id);
            if (selectedNote) {
                setSelectedNote(selectedNote);
            }
        }
    }, [params]);

    const { formData, errors, validateFormData, handleChange, resetNoteForm } =
        useNoteForm(selectedNote);

    const { onAdd, onEdit } = useRowActions();

    const handleClose = () => {
        if (selectedNote) {
            setSelectedNote(null);
        }
        navigate("/");
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const validatedFormData = validateFormData();
        if (!validatedFormData) return false;

        if (selectedNote) {
            onEdit(selectedNote.id, validatedFormData);
        } else {
            onAdd(validatedFormData);
        }
        resetNoteForm();
        return true;
    };

    return (
        <Dialog
            show={true}
            title={selectedNote ? "Edit note" : "Create note"}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
        >
            <form className="flex flex-col gap-3 w-full">
                <NameInput
                    value={formData.name || ""}
                    onChange={handleChange}
                />
                <CategoryInput
                    categories={Object.values(CategoryEnum)}
                    value={formData.category || ""}
                    onChange={handleChange}
                />
                <ContentInput
                    value={formData.content || ""}
                    onChange={handleChange}
                />
                {errors.length > 0 && <ErrorBlock errors={errors} />}
            </form>
        </Dialog>
    );
};

export default NoteFormModal;
