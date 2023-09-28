import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

import { useRowActions } from "@/hooks/useRowActions";
import { useAppSelector } from "@/redux/hooks";
import { selectActiveNotes } from "@/redux/notes/notesSlice";
import NoteFormModal from "./NoteFormModal";
import type { Note, CreateNoteInput, UpdateNoteInput } from "@/api/schemas";

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

    const handleNoteFormSubmit: SubmitHandler<
        CreateNoteInput | UpdateNoteInput
    > = (data: CreateNoteInput | UpdateNoteInput) => {
        if (id) {
            onEdit({ noteId: id, values: data as UpdateNoteInput });
        } else {
            onAdd(data as CreateNoteInput);
        }
        handleCloseNoteFormModal();
    };

    const defaultNoteFormData: CreateNoteInput = selectedNote
        ? {
              name: selectedNote.name,
              category: selectedNote.category,
              content: selectedNote.content,
          }
        : { name: "", content: "", category: { name: "task" } };

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
