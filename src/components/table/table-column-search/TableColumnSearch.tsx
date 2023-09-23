import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";

interface TableColumnSearchProps {
    searchValue: string;
    onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TableColumnSearch({
    searchValue,
    onSearchInputChange,
}: TableColumnSearchProps) {
    return (
        <Input
            name="note-name"
            placeholder="Filter notes by name..."
            className="h-8 w-[200px] lg:w-[300px]"
            value={searchValue}
            onChange={onSearchInputChange}
        />
    );
}
