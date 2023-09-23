import { Table } from "@tanstack/react-table";
import { categories } from "../data/categories";
import type { Note } from "@/redux/notes/types";
import ColumnFilter from "@/components/table/table-column-filter/TableColumnFilter";
import SearchByColumn from "@/components/table/table-column-search/TableColumnSearch";
import ResetTableFilters from "@/components/table/table-reset-filters-btn/TableResetFiltersBtn";
import ColumnsToggleMenu from "@/components/table/table-columns-toggle-menu/TableColumnsToggleMenu";
import RowsToggleMenu from "@/components/table/table-rows-toggle-menu/TableRowsToggleMenu";
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
        <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <SearchByColumn
                searchValue={searchValue}
                onSearchInputChange={onSearchInputChange}
            />
            <div className="flex items-center gap-2">
                <RowsToggleMenu />
                <ColumnsToggleMenu<Note> columns={hideableColumns} />
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
            </div>
        </div>
    );
}
