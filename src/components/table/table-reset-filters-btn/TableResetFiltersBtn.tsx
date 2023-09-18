import { LuFilterX } from "react-icons/lu";
import { Button } from "@/components/ui/button";

interface TableResetFiltersBtnProps {
    isFiltered: boolean;
    resetFilters: () => void;
}

export default function TableResetFiltersBtn({
    isFiltered,
    resetFilters,
}: TableResetFiltersBtnProps) {
    return isFiltered ? (
        <Button
            variant="ghost"
            onClick={resetFilters}
            className="h-8 px-2 lg:px-3"
        >
            Reset
            <LuFilterX className="ml-2 h-4 w-4" />
        </Button>
    ) : null;
}
