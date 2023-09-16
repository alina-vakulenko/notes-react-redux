import { ChangeEvent } from "react";
import { Column } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface ColumnSearchInputProps<TData> {
    column: Column<TData>;
}

export default function ColumnSearchInput<TData>({
    column,
}: ColumnSearchInputProps<TData>) {
    const value = (column.getFilterValue() as string) ?? "";
    const onChange = (event: ChangeEvent<HTMLInputElement>) =>
        column.setFilterValue(event.target.value);

    return (
        <Input
            placeholder="Filter notes by name..."
            className="h-8 w-[150px] lg:w-[250px]"
            value={value}
            onChange={onChange}
        />
    );
}
