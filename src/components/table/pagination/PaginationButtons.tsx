import {
    RxChevronLeft,
    RxChevronRight,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
} from "react-icons/rx";
import PaginationBtn from "./PaginationBtn";

export interface PaginationButtonsProps {
    isPrevPage: boolean;
    isNextPage: boolean;
    pageCount: number;
    setPage: (page: number) => void;
    getPrevPage: () => void;
    getNextPage: () => void;
}

export default function PaginationButtons({
    pageCount,
    isPrevPage,
    isNextPage,
    getPrevPage,
    getNextPage,
    setPage,
}: PaginationButtonsProps) {
    return (
        <div className="flex items-center space-x-2">
            <PaginationBtn onClick={() => setPage(0)} disabled={!isPrevPage}>
                <span className="sr-only">First page</span>
                <RxDoubleArrowLeft className="h-4 w-4" />
            </PaginationBtn>
            <PaginationBtn onClick={getPrevPage} disabled={!isPrevPage}>
                <span className="sr-only">Previous page</span>
                <RxChevronLeft className="h-4 w-4" />
            </PaginationBtn>
            <PaginationBtn onClick={getNextPage} disabled={!isNextPage}>
                <span className="sr-only">Next page</span>
                <RxChevronRight className="h-4 w-4" />
            </PaginationBtn>
            <PaginationBtn
                onClick={() => setPage(pageCount)}
                disabled={!isNextPage}
            >
                <span className="sr-only">Last page</span>
                <RxDoubleArrowRight className="h-4 w-4" />
            </PaginationBtn>
        </div>
    );
}
