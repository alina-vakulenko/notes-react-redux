export interface CurrentPageProps {
    currentPage: number;
    pageCount: number;
}

export default function CurrentPage({
    currentPage,
    pageCount,
}: CurrentPageProps) {
    return (
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {currentPage} of {pageCount}
        </div>
    );
}
