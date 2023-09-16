import PaginationBtn from "./PaginationBtn";

export interface PrevNextPageProps {
    onPrevPageClick: () => void;
    onNextPageClick: () => void;
    disabledPrev: boolean;
    disabledNext: boolean;
}

export default function PrevNextPage({
    onPrevPageClick,
    onNextPageClick,
    disabledPrev,
    disabledNext,
}: PrevNextPageProps) {
    return (
        <div className="flex">
            <PaginationBtn onClick={onPrevPageClick} disabled={disabledPrev}>
                Previous page
            </PaginationBtn>
            <PaginationBtn onClick={onNextPageClick} disabled={disabledNext}>
                Next page
            </PaginationBtn>
        </div>
    );
}
