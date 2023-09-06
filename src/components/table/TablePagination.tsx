import {
    RxChevronLeft,
    RxChevronRight,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
} from "react-icons/rx";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface TablePaginationProps {
    isPrevPage: boolean;
    isNextPage: boolean;
    getPrevPage: () => void;
    getNextPage: () => void;
    currentPage: number;
    setPage: (page: number) => void;
    pageCount: number;
    pageSize: number;
    tableRowsCount: number;
    tableSelectedRowsCount: number;
    setPageSize: (value: number) => void;
}

export default function TablePagination({
    currentPage,
    pageCount,
    pageSize,
    isPrevPage,
    isNextPage,
    tableRowsCount,
    tableSelectedRowsCount,
    getPrevPage,
    getNextPage,
    setPage,
    setPageSize,
}: TablePaginationProps) {
    return (
        <div className="flex items-center justify-between px-2">
            <div className="flex-1 text-sm text-muted-foreground">
                {tableSelectedRowsCount} of {tableRowsCount} row(s) selected.
            </div>
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={String(pageSize)}
                        onValueChange={(value) => {
                            setPageSize(Number(value));
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={pageSize} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem
                                    key={pageSize}
                                    value={`${pageSize}`}
                                >
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {currentPage} of {pageCount}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => setPage(0)}
                        disabled={!isPrevPage}
                    >
                        <span className="sr-only">Go to first page</span>
                        <RxDoubleArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={getPrevPage}
                        disabled={!isPrevPage}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <RxChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={getNextPage}
                        disabled={!isNextPage}
                    >
                        <span className="sr-only">Go to next page</span>
                        <RxChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="hidden h-8 w-8 p-0 lg:flex"
                        onClick={() => setPage(pageCount)}
                        disabled={!isNextPage}
                    >
                        <span className="sr-only">Go to last page</span>
                        <RxDoubleArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
