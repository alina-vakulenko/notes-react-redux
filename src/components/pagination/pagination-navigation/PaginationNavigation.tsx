import { ReactNode } from "react";
import {
    RxChevronLeft,
    RxChevronRight,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
} from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PaginationBtnProps {
    children: ReactNode;
    disabled: boolean;
    onClick: () => void;
}

export interface PaginationNavigationProps {
    isPrevPage: boolean;
    isNextPage: boolean;
    pageCount: number;
    currentPage: number;
    setPage: (page: number) => void;
    getPrevPage: () => void;
    getNextPage: () => void;
}

export default function PaginationNavigation({
    pageCount,
    isPrevPage,
    isNextPage,
    currentPage,
    getPrevPage,
    getNextPage,
    setPage,
}: PaginationNavigationProps) {
    return (
        <div className="flex flex-col gap-4 items-center sm:flex-row">
            <div className="flex gap-2 items-center justify-center">
                <span className="flex items-center justify-center text-sm font-medium">
                    Page {currentPage} of {pageCount}
                </span>
                <span className="flex items-center justify-center text-sm gap-1">
                    | Go to page:
                    <Input
                        name="target-page"
                        type="number"
                        defaultValue={currentPage}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            setPage(page);
                        }}
                        className="border p-1 rounded h-8 w-16"
                    />
                </span>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <PaginationBtn
                    onClick={() => setPage(0)}
                    disabled={!isPrevPage}
                >
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
        </div>
    );
}

function PaginationBtn({ children, disabled, onClick }: PaginationBtnProps) {
    return (
        <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
