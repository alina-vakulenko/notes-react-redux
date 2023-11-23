import { Note } from "@/api/schemas";
import {
    PaginationNavigation,
    PaginationSelectPageSize,
} from "@/components/pagination";
import { useReactTablePagination } from "@/hooks/useReactTablePagination";
import { Table } from "@tanstack/react-table";

export interface TablePaginationProps {
    table: Table<Note>;
}

export default function TablePagination({ table }: TablePaginationProps) {
    const {
        currentPage,
        pageCount,
        pageSize,
        isPrevPage,
        isNextPage,
        getPrevPage,
        getNextPage,
        setPage,
        setPageSize,
    } = useReactTablePagination(table);

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <PaginationSelectPageSize
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
            <PaginationNavigation
                pageCount={pageCount}
                currentPage={currentPage}
                isPrevPage={isPrevPage}
                isNextPage={isNextPage}
                setPage={setPage}
                getPrevPage={getPrevPage}
                getNextPage={getNextPage}
            />
        </div>
    );
}
