import type { Meta, StoryObj } from "@storybook/react";
import TablePagination from "./TablePagination";

// import {
//     PaginationNavigationStory,
//     PaginationCurrentPageStory,
//     PaginationSelectPageSizeStory,
// } from "@/components/pagination";
import * as PaginationNavigation from "../../pagination/pagination-navigation/PaginationNavigation.stories";
import * as CurrentPage from "../../pagination/pagination-current-page/PaginationCurrentPage.stories";
import * as PageSizeSelect from "../../pagination/pagination-select-page-size/PaginationSelectPageSize.stories";

const meta: Meta<typeof TablePagination> = {
    component: TablePagination,
    title: "DataTable/Table Pagination",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TablePagination>;

export const Default: Story = {
    args: {
        pageSize: PageSizeSelect.Default.args?.pageSize,
        pageCount: CurrentPage.Default.args?.pageCount,
        ...PaginationNavigation.Default.args,
    },
};
