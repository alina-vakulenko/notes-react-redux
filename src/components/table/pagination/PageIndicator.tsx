export interface PageIndicatorProps {
    currentPage: number;
    pageCount: number;
}

export default function PageIndicator({
    currentPage,
    pageCount,
}: PageIndicatorProps) {
    return (
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {currentPage} of {pageCount}
        </div>
    );
}
