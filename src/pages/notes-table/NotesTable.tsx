import { ChangeEvent, useState } from "react";
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
    Column,
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
import type { Note } from "@/redux/notes/types";
import { useTablePagination } from "@/hooks/useTablePagination";

export type ITableColumn = Column<Note>;

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

    const isFiltered = table.getState().columnFilters.length > 0;

    const resetFilters = () => {
        table.resetColumnFilters();
    };

    const getColumnByKey = (accessorKey: string): ITableColumn | undefined => {
        return table.getColumn(accessorKey);
    };

    const getInputFilterData = (column: ITableColumn) => {
        console.log("column filter value", column?.getFilterValue());
        const value = (column.getFilterValue() as string) ?? "";
        const onChange = (event: ChangeEvent<HTMLInputElement>) =>
            column.setFilterValue(event.target.value);
        return { value, onChange };
    };

    const getFacetedFilterData = (column: ITableColumn) => {
        const facets = column.getFacetedUniqueValues();
        const selectedValues = new Set(column.getFilterValue() as string[]);
        const clearColumnFilter = () => column.setFilterValue(undefined);
        const setColumnFilter = (values: string[]) =>
            column.setFilterValue(values);
        console.log("facets", facets);
        console.log("selectedValues", selectedValues);
        return { facets, selectedValues, clearColumnFilter, setColumnFilter };
    };

    const paginationProps = useTablePagination(table);

    return (
        <div className="space-y-4">
            <TableToolbar
                isFiltered={isFiltered}
                resetFilters={resetFilters}
                getColumnByKey={getColumnByKey}
                getFacetedFilterData={getFacetedFilterData}
                getInputFilterData={getInputFilterData}
            />
            <DataTable table={table} />
            <TablePagination {...paginationProps} />
        </div>
    );
};

export default NotesTable;
