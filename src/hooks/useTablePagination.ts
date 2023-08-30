import { Table } from "@tanstack/react-table";

export function useTablePagination<TData>(table: Table<TData>) {
    const isPrevPage = !table.getCanPreviousPage();
    const isNextPage = !table.getCanNextPage();
    const getPrevPage = () => {
        return table.previousPage();
    };
    const getNextPage = () => {
        return table.nextPage();
    };

    const pageCount = table.getPageCount();
    const pageSize = table.getState().pagination.pageSize;
    const setPageSize = (value: number) => {
        table.setPageSize(value);
    };

    const currentPage = table.getState().pagination.pageIndex + 1;
    const setPage = (page: number) => {
        table.setPageIndex(page);
    };

    const tableRowsCount = table.getFilteredRowModel().rows.length;
    const tableSelectedRowsCount =
        table.getFilteredSelectedRowModel().rows.length;

    return {
        pageCount,
        pageSize,
        setPageSize,
        currentPage,
        setPage,
        isPrevPage,
        isNextPage,
        getPrevPage,
        getNextPage,
        tableRowsCount,
        tableSelectedRowsCount,
    };
}
