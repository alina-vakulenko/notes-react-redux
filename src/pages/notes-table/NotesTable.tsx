import { useSearchParams } from "react-router-dom";
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
} from "../../redux/notes/notesSlice";
import { useAppSelector } from "../../redux/hooks";
import NoteFormModal from "../form-modal/NoteFormModal";
import { columns } from "./columns";
import DataTable from "@/components/table/Table";
import TablePagination from "@/components/table/TablePagination";
import TableToolbar from "./TableToolbar";

const NotesTable = () => {
    const [searchParams] = useSearchParams();
    const activeNotesList = useAppSelector(selectActiveNotes);
    const archivedNotesList = useAppSelector(selectArchivedNotes);

    const showArchived = searchParams.has("withArchived");

    const data = showArchived
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
            <NoteFormModal />
        </div>
    );
};

export default NotesTable;
