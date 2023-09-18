import type { Meta, StoryObj } from "@storybook/react";
import PaginationCurrentPage from "./PaginationCurrentPage";

const meta: Meta<typeof PaginationCurrentPage> = {
    component: PaginationCurrentPage,
    title: "Pagination/Current Page",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PaginationCurrentPage>;

export const Default: Story = {
    args: {
        currentPage: 1,
        pageCount: 100,
    },
};
