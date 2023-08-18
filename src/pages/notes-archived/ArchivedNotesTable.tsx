import { BsFillTrashFill, BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import Table from "../../components/table";
import { useTableActions } from "../../hooks/useTableActions";
import { useAppSelector } from "../../redux/hooks";
import { selectArchivedNotes } from "../../redux/notes/notesSlice";
import { dataShape } from "../notes-active/dataShape";
import { ArchivedNoteActionName, ArchivedNotesTableAction } from "../types";

const ArchivedNotesTable = () => {
    const archivedNotesList = useAppSelector(selectArchivedNotes);
    const { onUnarchive, onRemove } = useTableActions();

    const archivedNotesActions: ArchivedNotesTableAction[] = [
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
            columns={dataShape}
            rows={archivedNotesList}
            actions={archivedNotesActions}
        />
    );
};

export default ArchivedNotesTable;
