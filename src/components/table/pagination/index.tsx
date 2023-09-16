import RowsPerPageSelect from "./RowsPerPageSelect";
import PageIndicator from "./PageIndicator";
import PaginationButtons from "./PaginationButtons";

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
        <div className="flex items-center space-x-6 lg:space-x-8">
            <RowsPerPageSelect pageSize={pageSize} setPageSize={setPageSize} />
            <PageIndicator currentPage={currentPage} pageCount={pageCount} />
            <PaginationButtons
                pageCount={pageCount}
                setPage={setPage}
                isPrevPage={isPrevPage}
                isNextPage={isNextPage}
                getPrevPage={getPrevPage}
                getNextPage={getNextPage}
            />
        </div>
    );
}
