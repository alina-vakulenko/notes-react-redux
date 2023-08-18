import { useState } from "react";
import {
    BsFillPencilFill,
    BsFillTrashFill,
    BsFillFileEarmarkZipFill,
    BsPlusLg,
} from "react-icons/bs";
import Button from "../../components/button/Button";
import Table from "../../components/table";
import NoteFormModal from "../form-modal/NoteFormModal";
import { useTableActions } from "../../hooks/useTableActions";
import { useAppSelector } from "../../redux/hooks";
import { selectActiveNotes } from "../../redux/notes/notesSlice";
import { ActiveNotesTableAction, ActiveNoteActionName } from "../types";
import { dataShape } from "./dataShape";
import { exampleRowData } from "./exampleRowData";
import { Note } from "../types";

const ActiveNotesTable = () => {
    const activeNotesList = useAppSelector(selectActiveNotes);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | undefined>();

    const { onArchive, onRemove } = useTableActions();

    const openEditForm = (noteId: string) => {
        const noteData = activeNotesList.find((note) => note.id === noteId);
        if (noteData) {
            setSelectedNote(noteData);
            setIsModalOpen(true);
        }
    };

    const clearSelectedNote = () => {
        setSelectedNote(undefined);
    };

    const actions: ActiveNotesTableAction[] = [
        {
            key: ActiveNoteActionName.Edit,
            header: <BsFillPencilFill />,
            align: "center",
            cb: openEditForm,
        },
        {
            key: ActiveNoteActionName.Archive,
            header: <BsFillFileEarmarkZipFill />,
            align: "center",
            cb: onArchive,
        },
        {
            key: ActiveNoteActionName.Remove,
            header: <BsFillTrashFill />,
            align: "center",
            cb: onRemove,
        },
    ];

    return (
        <>
            <Table
                columns={dataShape}
                rows={activeNotesList}
                exampleRow={exampleRowData}
                actions={actions}
            />
            <div className="mt-2 ml-auto">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    shape="square"
                    size="md"
                >
                    <BsPlusLg />
                </Button>
            </div>
            {isModalOpen && (
                <NoteFormModal
                    selectedNote={selectedNote}
                    clearSelectedNote={clearSelectedNote}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
        </>
    );
};

export default ActiveNotesTable;
