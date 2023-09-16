import { RxCross2 } from "react-icons/rx";
import { Button } from "@/components/ui/button";

interface ResetAllFiltersBtnProps {
    isFiltered: boolean;
    resetFilters: () => void;
}

export default function ResetAllFiltersBtn({
    isFiltered,
    resetFilters,
}: ResetAllFiltersBtnProps) {
    return isFiltered ? (
        <Button
            variant="ghost"
            onClick={resetFilters}
            className="h-8 px-2 lg:px-3"
        >
            Reset
            <RxCross2 className="ml-2 h-4 w-4" />
        </Button>
    ) : null;
}
