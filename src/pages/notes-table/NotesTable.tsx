import { useEffect, useState } from "react";
import { selectActiveNotes, selectNotes } from "@/redux/notes/notesSlice";
import { useAppSelector } from "@/redux/hooks";
import DataTable from "@/components/table/Table";
import TablePagination from "@/components/table/TablePagination";
import { useRowActions } from "@/hooks/useRowActions";
import TableToolbar from "./TableToolbar";
import { columns } from "./columns";
import type { Note } from "@/redux/notes/types";
import { useTable } from "@/hooks/useTable";
import { useReactTablePagination } from "@/hooks/useReactTablePagination";
import { useReactTableFilters } from "@/hooks/useReactTableFilters";

const NotesTable = () => {
    const [data, setData] = useState<Note[]>([]);
    const { showArchived } = useRowActions();
    const activeNotesList = useAppSelector(selectActiveNotes);
    const allNotesList = useAppSelector(selectNotes);

    useEffect(() => {
        if (showArchived) {
            setData(allNotesList);
        } else {
            setData(activeNotesList);
        }
    }, [showArchived, activeNotesList, allNotesList]);

    const { table, rows, headerGroups } = useTable(data, columns);
    const paginationProps = useReactTablePagination(table);
    const filterProps = useReactTableFilters(table);

    return (
        <div className="w-full space-y-4">
            <TableToolbar {...filterProps} />
            <DataTable rows={rows} headerGroups={headerGroups} />
            <TablePagination {...paginationProps} />
        </div>
    );
};

export default NotesTable;
