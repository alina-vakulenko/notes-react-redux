import { Column } from "@tanstack/react-table";

export type SortDirection = "asc" | "desc";

interface ColumnActions {
    canBeSorted: boolean;
    isSorted: false | SortDirection;
    isVisible: boolean;
    canBeHidden: boolean;
    toggleColumnVisibility: (isVisible: boolean) => void;
    sortColumn: (direction: SortDirection) => void;
}

export const useColumnActions = <TData>(
    column: Column<TData>
): ColumnActions => {
    const toggleColumnVisibility = (isVisible: boolean) => {
        column.toggleVisibility(isVisible);
    };

    const sortColumn = (direction: SortDirection) => {
        if (direction === "asc") {
            column.toggleSorting(false);
        } else {
            column.toggleSorting(true);
        }
    };

    const isSorted = column.getIsSorted();
    const isVisible = column.getIsVisible();
    const canBeSorted = column.getCanSort();
    const canBeHidden = column.getCanHide();

    return {
        toggleColumnVisibility,
        sortColumn,
        isSorted,
        isVisible,
        canBeSorted,
        canBeHidden,
    };
};
