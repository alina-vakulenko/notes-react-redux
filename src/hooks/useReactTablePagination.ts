import { Table } from "@tanstack/react-table";

interface TablePagination {
    pageCount: number;
    pageSize: number;
    currentPage: number;
    isPrevPage: boolean;
    isNextPage: boolean;
    tableRowsCount: number;
    tableSelectedRowsCount: number;
    setPage: (page: number) => void;
    setPageSize: (value: number) => void;
    getPrevPage: () => void;
    getNextPage: () => void;
}

export function useReactTablePagination<TData>(
    table: Table<TData>
): TablePagination {
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
        currentPage,
        isPrevPage,
        isNextPage,
        tableRowsCount,
        tableSelectedRowsCount,
        setPage,
        setPageSize,
        getPrevPage,
        getNextPage,
    };
}
