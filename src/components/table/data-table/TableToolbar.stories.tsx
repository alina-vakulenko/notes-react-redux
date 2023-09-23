import type { Meta, StoryObj } from "@storybook/react";
import NotesTableToolbar from "@/pages/notes-table/toolbar/TableToolbar";

const meta = {
    component: NotesTableToolbar,
    title: "DataTable/Toolbar/Toolbar",
    tags: ["autodocs"],
} satisfies Meta<typeof NotesTableToolbar>;

export default meta;
type Story = StoryObj<typeof NotesTableToolbar>;

import * as TableColumnFilter from "../table-column-filter/TableColumnFilter.stories";
import * as TableToggleColumnsView from "../table-columns-toggle-menu/TableColumnsToggleMenu.stories";
import * as TableToggleRowsView from "../table-rows-toggle-menu/TableRowsToggleMenu.stories";
import * as TableResetFiltersBtn from "../table-reset-filters-btn/TableResetFiltersBtn.stories";

export const Default: Story = {
    args: {},
};
