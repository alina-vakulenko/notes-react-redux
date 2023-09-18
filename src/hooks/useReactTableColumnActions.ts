import { Column } from "@tanstack/react-table";
import { ChangeEvent } from "react";

export type SortDirection = "asc" | "desc";

interface ColumnActions {
    sortable: boolean;
    hideable: boolean;
    isSorted: false | SortDirection;
    isVisible: boolean;
    columnValuesMap: Map<string, number>;
    columnFilteredValues: Set<string>;
    searchValue: string;
    toggleColumnVisibility: (isVisible: boolean) => void;
    sortColumn: (direction: SortDirection) => void;
    clearColumnFilter: () => void;
    setColumnFilter: (values: string[]) => void;
    onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useReactTableColumnActions = <TData>(
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

    const columnValuesMap = column.getFacetedUniqueValues();
    const columnFilteredValues = new Set(column.getFilterValue() as string[]);
    const clearColumnFilter = () => column.setFilterValue(undefined);
    const setColumnFilter = (values: string[]) => column.setFilterValue(values);

    const isSorted = column.getIsSorted();
    const isVisible = column.getIsVisible();
    const sortable = column.getCanSort();
    const hideable = column.getCanHide();

    const searchValue = (column.getFilterValue() as string) ?? "";
    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) =>
        column.setFilterValue(event.target.value);

    return {
        isSorted,
        isVisible,
        sortable,
        hideable,
        columnValuesMap,
        columnFilteredValues,
        searchValue,
        onSearchInputChange,
        sortColumn,
        setColumnFilter,
        clearColumnFilter,
        toggleColumnVisibility,
    };
};
