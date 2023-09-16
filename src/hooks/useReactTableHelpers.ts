import { Table, Column } from "@tanstack/react-table";

interface TableHelpers<TData> {
    isTableFiltered: boolean;
    resetTableFilters: () => void;
    getColumnByKey: (accessorKey: string) => Column<TData> | undefined;
    tableRowsCount: number;
    tableSelectedRowsCount: number;
}

export function useReactTableHelpers<TData>(
    table: Table<TData>
): TableHelpers<TData> {
    const isTableFiltered = table.getState().columnFilters.length > 0;

    const resetTableFilters = () => {
        table.resetColumnFilters();
    };

    const getColumnByKey = (accessorKey: string) => {
        return table.getColumn(accessorKey);
    };

    const tableRowsCount = table.getFilteredRowModel().rows.length;
    const tableSelectedRowsCount =
        table.getFilteredSelectedRowModel().rows.length;

    return {
        isTableFiltered,
        tableRowsCount,
        tableSelectedRowsCount,
        resetTableFilters,
        getColumnByKey,
    };
}
