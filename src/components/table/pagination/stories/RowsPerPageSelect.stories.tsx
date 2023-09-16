import type { Meta, StoryObj } from "@storybook/react";
import RowsPerPageSelect from "../RowsPerPageSelect";

const meta: Meta<typeof RowsPerPageSelect> = {
    component: RowsPerPageSelect,
    title: "Pagination/Page size",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RowsPerPageSelect>;

export const Default: Story = {
    args: {
        pageSize: 10,
    },
};
