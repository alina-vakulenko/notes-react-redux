import { BsFillTrashFill, BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
    selectArchivedNotes,
    noteUnarchived,
    noteRemoved,
} from "../../redux/notes/notesSlice";
import Table from "../../components/table";
import { ArchivedNotesTableAction, ArchivedNoteActionName } from "../types";
import { colNames } from "../notes-active/ActiveNotesTable";

const ArchivedNotesTable = () => {
    const dispatch = useAppDispatch();
    const archivedNotesList = useAppSelector(selectArchivedNotes);

    const onRemove = (noteId: string) => {
        dispatch(noteRemoved(noteId));
    };

    const onUnarchive = (noteId: string) => {
        dispatch(noteUnarchived(noteId));
    };

    const actions: ArchivedNotesTableAction[] = [
        {
            key: ArchivedNoteActionName.Unarchive,
            header: <BsFillFileEarmarkArrowUpFill />,
            cb: onUnarchive,
            align: "center",
        },
        {
            key: ArchivedNoteActionName.Remove,
            header: <BsFillTrashFill />,
            cb: onRemove,
            align: "center",
        },
    ];

    return (
        <Table
            caption="Archived Notes"
            columns={colNames}
            rows={archivedNotesList}
            actions={actions}
        />
    );
};

export default ArchivedNotesTable;
