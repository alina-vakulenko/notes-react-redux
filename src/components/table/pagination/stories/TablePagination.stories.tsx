import type { Meta, StoryObj } from "@storybook/react";
import TablePagination from "..";

import * as PaginationButtons from "./PaginationButtons.stories";
import * as PageIndicator from "./PageIndicator.stories";
import * as RowsPerPage from "./RowsPerPageSelect.stories";

const meta: Meta<typeof TablePagination> = {
    component: TablePagination,
    title: "Generic Table/Pagination",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TablePagination>;

export const Default: Story = {
    args: {
        ...RowsPerPage.Default.args,
        ...PageIndicator.Default.args,
        ...PaginationButtons.Default.args,
    },
};
