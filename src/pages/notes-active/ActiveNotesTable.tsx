import {
    BsFillPencilFill,
    BsFillTrashFill,
    BsFillFileEarmarkZipFill,
} from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
    selectActiveNotes,
    noteRemoved,
    noteArchived,
} from "../../redux/notes/notesSlice";
import Table from "../../components/table";
import {
    NotesTableColumn,
    ActiveNotesTableAction,
    Note,
    ActiveNoteActionName,
} from "../types";
import { getFormattedDate } from "../../utils/getFormattedDate";

export const colNames: NotesTableColumn[] = [
    {
        key: "name",
        header: "Name",
    },
    {
        key: "created",
        header: "Created",
        format: (value: string) =>
            getFormattedDate(value, {
                month: "long",
                day: "numeric",
                year: "numeric",
            }),
    },
    { key: "category", header: "Category", align: "center" },
    { key: "content", header: "Content" },
    {
        key: "dates",
        header: "Dates",
        format: (value: string) => {
            const valuesList = value.split(", ");
            let result = "";
            for (value of valuesList) {
                try {
                    const formattedDate = getFormattedDate(value, {
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                    });
                    result = result.concat(formattedDate, " ");
                } catch (e) {
                    result = result.concat(value, " ");
                }
            }
            return result;
        },
    },
];

const exampleRow: Note = {
    id: "exampleId",
    name: "Example name",
    created: new Date().toISOString(),
    category: "Task",
    content: "Description",
    dates: "",
    archived: false,
};

type ActiveNotesTableProps = {
    onSelectNote: (note: Note) => void;
};

const ActiveNotesTable = ({ onSelectNote }: ActiveNotesTableProps) => {
    const dispatch = useAppDispatch();
    const activeNotesList = useAppSelector(selectActiveNotes);

    const onEditClick = (noteId: string) => {
        const clickedItem = activeNotesList.find((note) => note.id === noteId);
        if (clickedItem) {
            onSelectNote(clickedItem);
        }
    };

    const onRemoveClick = (noteId: string) => {
        dispatch(noteRemoved(noteId));
    };

    const onArchiveClick = (noteId: string) => {
        dispatch(noteArchived(noteId));
    };

    const actions: ActiveNotesTableAction[] = [
        {
            key: ActiveNoteActionName.Edit,
            header: <BsFillPencilFill />,
            align: "center",
            cb: onEditClick,
        },
        {
            key: ActiveNoteActionName.Archive,
            header: <BsFillFileEarmarkZipFill />,
            align: "center",
            cb: onArchiveClick,
        },
        {
            key: ActiveNoteActionName.Remove,
            header: <BsFillTrashFill />,
            align: "center",
            cb: onRemoveClick,
        },
    ];

    return (
        <Table
            caption="Active Notes"
            columns={colNames}
            rows={activeNotesList}
            exampleRow={exampleRow}
            actions={actions}
        />
    );
};

export default ActiveNotesTable;
