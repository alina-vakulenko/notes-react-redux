import { useState } from "react";
import Switcher from "../../components/switcher/Switcher";
import ActiveNotesTable from "../notes-active/ActiveNotesTable";
import ArchivedNotesTable from "../notes-archived/ArchivedNotesTable";
import NoteFormModal from "../form-modal/NoteFormModal";
import { Note } from "../types";

const Notes = () => {
    const [hideArchived, setHideArchived] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [editFormMode, setEditFormMode] = useState(false);

    const onSelectNote = (item: Note) => {
        setSelectedNote(item);
        setEditFormMode(true);
        setShowModal(true);
    };

    return (
        <>
            <Switcher
                label=" Hide archived notes"
                checked={hideArchived}
                onChange={() => setHideArchived((prev) => !prev)}
            />
            <ActiveNotesTable onSelectNote={onSelectNote} />
            <button
                onClick={() => setShowModal(true)}
                className="btn btn-dark d-block ms-auto mt-1 mb-4"
            >
                Add note
            </button>
            {!hideArchived && <ArchivedNotesTable />}
            {showModal && (
                <NoteFormModal
                    setShow={setShowModal}
                    dataToEdit={selectedNote}
                    clearDataToEdit={() => setSelectedNote(null)}
                    editMode={editFormMode}
                />
            )}
        </>
    );
};

export default Notes;
