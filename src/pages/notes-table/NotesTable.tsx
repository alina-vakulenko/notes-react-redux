import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { SEARCH_PARAMS_KEY, useRowFilters } from "@/hooks/useRowFilters";
import { useTable } from "@/hooks/useTable";
import { useReactTablePagination } from "@/hooks/useReactTablePagination";
import { useReactTableHelpers } from "@/hooks/useReactTableHelpers";
import DataTable from "@/components/table/data-table/DataTable";
import RowsCounter from "@/components/table/table-rows-counter.tsx/TableRowsCounter";
import TablePagination from "@/components/table/table-pagination/TablePagination";
import { selectActiveNotes, selectNotes } from "@/redux/notes/notesSlice";
import type { Note } from "@/redux/notes/types";
import TableToolbar from "./toolbar/TableToolbar";
import { columns } from "./columns";

export default function NotesTable() {
    const { rowsFilter } = useRowFilters();
    const [data, setData] = useState<Note[]>([]);
    const activeNotes = useAppSelector(selectActiveNotes);
    const allNotes = useAppSelector(selectNotes);

    useEffect(() => {
        let filteredNotes = rowsFilter[SEARCH_PARAMS_KEY.WITH_ARCHIVED]
            ? [...allNotes]
            : [...activeNotes];

        if (rowsFilter[SEARCH_PARAMS_KEY.DATES_ONLY]) {
            filteredNotes = filteredNotes.filter(
                (note) => note.dates.length > 0
            );
        }

        const sortedFilteredNotes = [...filteredNotes].sort((a, b) =>
            a.archived === b.archived ? 0 : a.archived > b.archived ? 1 : -1
        );
        setData(sortedFilteredNotes);
    }, [rowsFilter, activeNotes, allNotes]);

    const { table } = useTable(data, columns);

    const paginationProps = useReactTablePagination(table);
    const { tableRowsCount, tableSelectedRowsCount } =
        useReactTableHelpers(table);

    return (
        <div className="w-full space-y-4">
            <TableToolbar table={table} />
            <div className="p-2 rounded-md border border-border space-y-4 bg-background">
                <DataTable<Note> table={table} />
                <div className="space-y-4 lg:flex md:space-x-2 md:space-y-0 items-center justify-between">
                    <RowsCounter
                        tableRowsCount={tableRowsCount}
                        tableSelectedRowsCount={tableSelectedRowsCount}
                    />
                    <TablePagination {...paginationProps} />
                </div>
            </div>
        </div>
    );
}
