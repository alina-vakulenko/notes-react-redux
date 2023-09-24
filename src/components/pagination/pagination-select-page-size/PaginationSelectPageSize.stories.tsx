import type { Meta, StoryObj } from "@storybook/react";
import PageSizeSelect from "./PaginationSelectPageSize";

const meta: Meta<typeof PageSizeSelect> = {
    component: PageSizeSelect,
    title: "Pagination/Page Size Select",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageSizeSelect>;

export const Default: Story = {
    args: {
        pageSize: 10,
    },
};
