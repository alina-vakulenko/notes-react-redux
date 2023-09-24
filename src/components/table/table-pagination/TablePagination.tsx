import {
    PaginationNavigation,
    PaginationSelectPageSize,
} from "@/components/pagination";

export interface TablePaginationProps {
    isPrevPage: boolean;
    isNextPage: boolean;
    currentPage: number;
    pageCount: number;
    pageSize: number;
    setPage: (page: number) => void;
    setPageSize: (value: number) => void;
    getPrevPage: () => void;
    getNextPage: () => void;
}

export default function TablePagination({
    currentPage,
    pageCount,
    pageSize,
    isPrevPage,
    isNextPage,
    getPrevPage,
    getNextPage,
    setPage,
    setPageSize,
}: TablePaginationProps) {
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
