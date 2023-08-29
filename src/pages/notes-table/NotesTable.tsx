import { useState } from "react";
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    getFacetedRowModel,
    getFacetedUniqueValues,
} from "@tanstack/react-table";
import {
    selectActiveNotes,
    selectArchivedNotes,
} from "@/redux/notes/notesSlice";
import { useAppSelector } from "@/redux/hooks";
import DataTable from "@/components/table/Table";
import TablePagination from "@/components/table/TablePagination";
import { useNoteTableActions } from "@/hooks/useNoteTableActions";
import TableToolbar from "./TableToolbar";
import { columns } from "./columns";

const NotesTable = () => {
    const { showArchivedNotes } = useNoteTableActions();

    const activeNotesList = useAppSelector(selectActiveNotes);
    const archivedNotesList = useAppSelector(selectArchivedNotes);

    const data = showArchivedNotes
        ? [...activeNotesList, ...archivedNotesList]
        : activeNotesList;

    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    );
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        onRowSelectionChange: setRowSelection,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="space-y-4">
            <TableToolbar table={table} />
            <DataTable table={table} />
            <TablePagination table={table} />
        </div>
    );
};

export default NotesTable;
