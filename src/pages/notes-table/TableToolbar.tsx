import { RxCross2, RxPlusCircled } from "react-icons/rx";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DataTableFacetedFilter from "../../components/table/TableFilter";
import { useTableActions } from "@/hooks/useTableActions";
import { categories } from "./data/categories";

interface TableToolbarProps<TData> {
    table: Table<TData>;
}

export default function TableToolbar<Note>({ table }: TableToolbarProps<Note>) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const { openCreateForm } = useTableActions();

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
            <Button
                variant="ghost"
                onClick={() => openCreateForm()}
                className="h-8 px-2 lg:px-3"
            >
                <RxPlusCircled className="mr-2 h-4 w-4" />
                Add New Note
            </Button>
        </div>
    );
}
