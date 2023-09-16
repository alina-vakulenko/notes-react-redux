import { ReactNode } from "react";
import PaginationBtn from "./PaginationBtn";

export interface FirstLastPageProps {
    onFirstPageClick: () => void;
    onLastPageClick: () => void;
    disabledFirst: boolean;
    disabledLast: boolean;
    children: ReactNode;
}

export default function FirstLastPage({
    onFirstPageClick,
    onLastPageClick,
    disabledFirst,
    disabledLast,
    children,
}: FirstLastPageProps) {
    return (
        <div className="flex">
            <PaginationBtn onClick={onFirstPageClick} disabled={disabledFirst}>
                First page
            </PaginationBtn>
            {children}
            <PaginationBtn onClick={onLastPageClick} disabled={disabledLast}>
                Last page
            </PaginationBtn>
        </div>
    );
}
