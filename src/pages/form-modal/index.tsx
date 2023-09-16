import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { useRowActions } from "@/hooks/useRowActions";
import { useAppSelector } from "@/redux/hooks";
import { selectActiveNotes } from "@/redux/notes/notesSlice";
import type { Note } from "@/redux/notes/types";
import NoteFormModal from "./NoteFormModal";
import type { FormInputs } from "./NoteForm";
import { CategoryEnum } from "../notes-table/data/categories";

export default function NoteFormModalPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { onAdd, onEdit } = useRowActions();
    const activeNotes = useAppSelector(selectActiveNotes);

    const [selectedNote, setSelectedNote] = useState<Note | null>(null);

    useEffect(() => {
        if (id) {
            const noteFound = activeNotes.find((note) => note.id === id);
            if (noteFound) {
                setSelectedNote(noteFound);
            }
        }
    }, [id]);

    const handleCloseNoteFormModal = () => {
        if (selectedNote) {
            setSelectedNote(null);
        }
        navigate("/");
    };

    const handleNoteFormSubmit: SubmitHandler<FormInputs> = (
        data: FormInputs
    ) => {
        if (id) {
            onEdit(id, data);
        } else {
            onAdd(data);
        }
        handleCloseNoteFormModal();
    };

    const defaultNoteFormData: FormInputs = selectedNote
        ? {
              name: selectedNote.name,
              category: selectedNote.category as CategoryEnum,
              content: selectedNote.content,
          }
        : { name: "", category: CategoryEnum.TASK, content: "" };

    return (
        <NoteFormModal
            isOpen={true}
            onSubmit={handleNoteFormSubmit}
            onClose={handleCloseNoteFormModal}
            defaultNoteFormData={defaultNoteFormData}
            title={id ? "Edit note" : "Add note"}
        />
    );
}
