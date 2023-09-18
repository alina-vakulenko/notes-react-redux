import { Table } from "@tanstack/react-table";

import { categories } from "../data/categories";
import type { Note } from "@/redux/notes/types";
import ColumnFilter from "@/components/table/table-column-filter/TableColumnFilter";
import SearchByColumn from "@/components/table/table-column-search/TableColumnSearch";
import ResetTableFilters from "@/components/table/table-reset-filters-btn/TableResetFiltersBtn";
import CreateNoteModalTrigger from "./CreateNoteModalTrigger";
import ToggleRowsView from "@/components/table/table-rows-toggle-view/TableToggleRowsView";
import ToggleColumnsView from "@/components/table/table-columns-toggle-view/TableToggleColumnsView";
import { useRowActions } from "@/hooks/useRowActions";
import { useReactTableHelpers } from "@/hooks/useReactTableHelpers";
import { useReactTableColumnActions } from "@/hooks/useReactTableColumnActions";

interface NotesTableToolbarProps {
    table: Table<Note>;
}

export default function NotesTableToolbar({ table }: NotesTableToolbarProps) {
    const {
        isTableFiltered,
        hideableColumns,
        resetTableFilters,
        getColumnByKey,
    } = useReactTableHelpers(table);
    const { showArchived, toggleShowArchivedParams } = useRowActions();
    const nameColumn = getColumnByKey("name");
    const categoryColumn = getColumnByKey("category");
    const { searchValue, onSearchInputChange } = useReactTableColumnActions(
        nameColumn!
    );
    const {
        columnValuesMap,
        columnFilteredValues,
        clearColumnFilter,
        setColumnFilter,
    } = useReactTableColumnActions(categoryColumn!);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-center">
                <SearchByColumn
                    searchValue={searchValue}
                    onSearchInputChange={onSearchInputChange}
                />
            </div>
            <div className="flex items-center flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <ToggleRowsView
                        checked={showArchived}
                        onCheckedChange={toggleShowArchivedParams}
                        label="Show archived notes"
                    />
                </div>
                <div className="flex items-center justify-end gap-2">
                    <ColumnFilter
                        title="category"
                        options={categories}
                        columnValuesMap={columnValuesMap}
                        columnFilteredValues={columnFilteredValues}
                        clearColumnFilter={clearColumnFilter}
                        setColumnFilter={setColumnFilter}
                    />
                    <ResetTableFilters
                        isFiltered={isTableFiltered}
                        resetFilters={resetTableFilters}
                    />
                    <ToggleColumnsView<Note> columns={hideableColumns} />
                    <CreateNoteModalTrigger />
                </div>
            </div>
        </div>
    );
}
