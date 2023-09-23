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
            variant="outline"
            onClick={resetFilters}
            className="h-8 border-dashed"
        >
            <LuFilterX className="mr-2 h-4 w-4" />
            Reset
        </Button>
    ) : null;
}
