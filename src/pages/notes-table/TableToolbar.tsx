import { ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross2, RxPlusCircled } from "react-icons/rx";
import { Column } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DataTableFacetedFilter from "@/components/table/TableFilter";
import { useRowActions } from "@/hooks/useRowActions";
import { categories } from "./data/categories";

interface TableToolbarProps<TData> {
    isFiltered: boolean;
    resetFilters: () => void;
    getColumnByKey: (accessorKey: string) => Column<TData> | undefined;
    getFacetedFilterData: (column: Column<TData>) => {
        facets: Map<string, number> | undefined;
        selectedValues: Set<string>;
        clearColumnFilter: () => void;
        setColumnFilter: (values: string[]) => void;
    };
    getInputFilterData: (column: Column<TData>) => {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    };
}

export default function TableToolbar<TData>({
    isFiltered,
    resetFilters,
    getColumnByKey,
    getFacetedFilterData,
    getInputFilterData,
}: TableToolbarProps<TData>) {
    const location = useLocation();
    const { showArchived, toggleShowArchivedParams } = useRowActions();
    const nameColumn = getColumnByKey("name");
    const categoryColumn = getColumnByKey("category");

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                {nameColumn && (
                    <Input
                        placeholder="Filter notes..."
                        className="h-8 w-[150px] lg:w-[250px]"
                        {...getInputFilterData(nameColumn)}
                    />
                )}
                {categoryColumn && (
                    <DataTableFacetedFilter
                        title="Category"
                        options={categories}
                        {...getFacetedFilterData(categoryColumn)}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={resetFilters}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <RxCross2 className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="flex items-center space-x-2">
                <Switch
                    id="show-archived"
                    checked={showArchived}
                    onCheckedChange={toggleShowArchivedParams}
                />
                <Label htmlFor="show-archived">Show archived notes</Label>
            </div>
            <Link to="/create" state={{ backgroundLocation: location }}>
                <Button variant="ghost" className="h-8 px-2 lg:px-3">
                    <RxPlusCircled className="mr-2 h-4 w-4" />
                    Add New Note
                </Button>
            </Link>
        </div>
    );
}
