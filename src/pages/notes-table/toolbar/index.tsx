import { Column } from "@tanstack/react-table";

import { categories } from "../data/categories";
import type { Note } from "@/redux/notes/types";
import ColumnFilter from "@/components/table/ColumnFilter";
import SearchByColumn from "@/components/table/ColumnSearchInput";
import ResetTableFilters from "@/components/table/ResetAllFiltersBtn";
import CreateNoteModalTrigger from "./CreateNoteModalTrigger";
import ToggleArchived from "./ToggleArchived";

interface NotesTableToolbarProps {
    isTableFiltered: boolean;
    resetTableFilters: () => void;
    getColumnByKey: (key: string) => Column<Note> | undefined;
}

export default function NotesTableToolbar({
    isTableFiltered,
    resetTableFilters,
    getColumnByKey,
}: NotesTableToolbarProps) {
    const nameColumn = getColumnByKey("name");
    const categoryColumn = getColumnByKey("category");

    return (
        <div className="flex items-center justify-between">
            <ToggleArchived />
            {nameColumn && <SearchByColumn<Note> column={nameColumn} />}
            <div className="flex items-center space-x-2">
                {categoryColumn && (
                    <ColumnFilter<Note>
                        title="category"
                        column={categoryColumn}
                        options={categories}
                    />
                )}
                <ResetTableFilters
                    isFiltered={isTableFiltered}
                    resetFilters={resetTableFilters}
                />
                <CreateNoteModalTrigger />
            </div>
        </div>
    );
}
