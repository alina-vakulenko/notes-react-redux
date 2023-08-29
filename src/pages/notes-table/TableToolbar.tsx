import { Link, useLocation } from "react-router-dom";
import { Table } from "@tanstack/react-table";
import { RxCross2, RxPlusCircled } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import DataTableFacetedFilter from "@/components/table/TableFilter";
import { useNoteTableActions } from "@/hooks/useNoteTableActions";
import { categories } from "./data/categories";

interface TableToolbarProps<TData> {
    table: Table<TData>;
}

export default function TableToolbar<Note>({ table }: TableToolbarProps<Note>) {
    const location = useLocation();
    const isFiltered = table.getState().columnFilters.length > 0;
    const { showArchivedNotes, toggleShowArchivedNotes } =
        useNoteTableActions();
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter notes..."
                    value={
                        (table.getColumn("name")?.getFilterValue() as string) ??
                        ""
                    }
                    onChange={(event) =>
                        table
                            .getColumn("name")
                            ?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("category") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("category")}
                        title="Category"
                        options={categories}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <RxCross2 className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="flex items-center space-x-2">
                <Switch
                    id="show-archive"
                    checked={showArchivedNotes}
                    onCheckedChange={toggleShowArchivedNotes}
                />
                <Label htmlFor="show-archive">Show archived notes</Label>
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
