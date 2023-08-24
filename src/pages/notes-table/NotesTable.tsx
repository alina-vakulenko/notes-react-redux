import { useSearchParams } from "react-router-dom";
import {
    // BsFillPencilFill,
    // BsFillTrashFill,
    // BsFillFileEarmarkZipFill,
    // BsFillFileEarmarkArrowUpFill,
    BsPlusLg,
} from "react-icons/bs";
import Button from "../../components/button/Button";
import Table from "../../components/table";
import NoteFormModal from "../form-modal/NoteFormModal";
import {
    selectActiveNotes,
    selectArchivedNotes,
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import type { Note } from "../../redux/notes/types";
import { useTableActions } from "../../hooks/useTableActions";
import { columns } from "./tableSchema";

const NotesTable = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeNotesList = useAppSelector(selectActiveNotes);
    const archivedNotesList = useAppSelector(selectArchivedNotes);

    const showModal = searchParams.get("withArchived") === "y";

    const notesList = showModal
        ? [...activeNotesList, ...archivedNotesList]
        : activeNotesList;

    const { onStatusChange, onRemove } = useTableActions();

    const openEditForm = (note: Note) => {
        setSearchParams({
            ...searchParams,
            note: note.id,
        });
    };

    // const actions: IRowAction<Note>[] = [
    //     {
    //         key: ActionEnum.EDIT,
    //         type: "action",
    //         colName: "Edit",
    //         info: "Edit note",
    //         onClick: openEditForm,
    //         children: <BsFillPencilFill />,
    //     },
    //     {
    //         key: ActionEnum.REMOVE,
    //         type: "action",
    //         colName: "Remove",
    //         info: "Remove note",
    //         onClick: onRemove,
    //         children: <BsFillTrashFill />,
    //     },
    //     {
    //         key: ActionEnum.TOGGLE_STATUS,
    //         type: "action",
    //         colName: "Toggle",
    //         info: "Toggle status",
    //         onClick: onStatusChange,
    //         children: <BsFillFileEarmarkZipFill />,
    //     },
    // ];

    return (
        <>
            <Table columns={columns} data={notesList} />
            <div className="mt-2 ml-auto">
                <Button
                    onClick={() =>
                        setSearchParams({ ...searchParams, createNote: "y" })
                    }
                    shape="square"
                    size="md"
                >
                    <BsPlusLg />
                </Button>
            </div>
            <NoteFormModal />
        </>
    );
};

export default NotesTable;
