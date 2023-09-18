import { useEffect, useState } from "react";
import { selectActiveNotes, selectNotes } from "@/redux/notes/notesSlice";
import { useAppSelector } from "@/redux/hooks";
import DataTable from "@/components/table/data-table/DataTable";
import { useRowActions } from "@/hooks/useRowActions";
import { columns } from "./columns";
import { useTable } from "@/hooks/useTable";
import { useReactTablePagination } from "@/hooks/useReactTablePagination";
import { useReactTableHelpers } from "@/hooks/useReactTableHelpers";
import TableToolbar from "./toolbar/TableToolbar";
import RowsCounter from "@/components/table/table-rows-counter.tsx/TableRowsCounter";
import TablePagination from "@/components/table/table-pagination/TablePagination";
import type { Note } from "@/redux/notes/types";

export default function NotesTable() {
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

    const { table } = useTable(data, columns);
    const rows = table.getRowModel().rows;
    const headerGroups = table.getHeaderGroups();

    const paginationProps = useReactTablePagination(table);
    const { tableRowsCount, tableSelectedRowsCount } =
        useReactTableHelpers(table);

    return (
        <div className="w-full space-y-4">
            <TableToolbar table={table} />
            <DataTable<Note> rows={rows} headerGroups={headerGroups} />
            <div className="flex items-center justify-between px-2">
                <RowsCounter
                    tableRowsCount={tableRowsCount}
                    tableSelectedRowsCount={tableSelectedRowsCount}
                />
                <TablePagination {...paginationProps} />
            </div>
        </div>
    );
}
