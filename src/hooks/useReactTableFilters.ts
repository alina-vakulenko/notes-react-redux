import { ChangeEvent } from "react";
import { Table, Column } from "@tanstack/react-table";

interface InputFilter {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface FacetedFilter {
    facets: Map<string, number>;
    selectedValues: Set<string>;
    clearColumnFilter: () => void;
    setColumnFilter: (values: string[]) => void;
}

interface TableFilters<TData> {
    isFiltered: boolean;
    resetFilters: () => void;
    getColumnByKey: (accessorKey: string) => Column<TData> | undefined;
    getInputFilterData: (column: Column<TData>) => InputFilter;
    getFacetedFilterData: (column: Column<TData>) => FacetedFilter;
}

export function useReactTableFilters<TData>(
    table: Table<TData>
): TableFilters<TData> {
    const isFiltered = table.getState().columnFilters.length > 0;

    const resetFilters = () => {
        table.resetColumnFilters();
    };

    const getColumnByKey = (accessorKey: string) => {
        return table.getColumn(accessorKey);
    };

    const getInputFilterData = (column: Column<TData>) => {
        const value = (column.getFilterValue() as string) ?? "";
        const onChange = (event: ChangeEvent<HTMLInputElement>) =>
            column.setFilterValue(event.target.value);
        return { value, onChange };
    };

    const getFacetedFilterData = (column: Column<TData>) => {
        const facets = column.getFacetedUniqueValues();
        const selectedValues = new Set(column.getFilterValue() as string[]);
        const clearColumnFilter = () => column.setFilterValue(undefined);
        const setColumnFilter = (values: string[]) =>
            column.setFilterValue(values);
        return {
            facets,
            selectedValues,
            clearColumnFilter,
            setColumnFilter,
        };
    };

    return {
        isFiltered,
        resetFilters,
        getColumnByKey,
        getInputFilterData,
        getFacetedFilterData,
    };
}
