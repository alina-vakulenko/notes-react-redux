import { useEffect, useState } from "react";
import { selectActiveNotes, selectNotes } from "@/redux/notes/notesSlice";
import { useAppSelector } from "@/redux/hooks";
import DataTable from "@/components/table/Table";
import { useRowActions } from "@/hooks/useRowActions";
import TableToolbar from "./toolbar";
import { columns } from "./columns";
import type { Note } from "@/redux/notes/types";
import { useTable } from "@/hooks/useTable";
import { useReactTablePagination } from "@/hooks/useReactTablePagination";
import { useReactTableHelpers } from "@/hooks/useReactTableHelpers";
import RowsCounter from "@/components/table/RowsCounter";
import TablePagination from "@/components/table/pagination";

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

    const { table, rows, headerGroups } = useTable(data, columns);
    const paginationProps = useReactTablePagination(table);
    const {
        isTableFiltered,
        resetTableFilters,
        getColumnByKey,
        tableRowsCount,
        tableSelectedRowsCount,
    } = useReactTableHelpers(table);

    return (
        <div className="w-full space-y-4">
            <TableToolbar
                isTableFiltered={isTableFiltered}
                resetTableFilters={resetTableFilters}
                getColumnByKey={getColumnByKey}
            />
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
