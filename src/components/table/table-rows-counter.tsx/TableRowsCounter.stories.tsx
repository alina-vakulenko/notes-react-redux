import type { Meta, StoryObj } from "@storybook/react";
import TableRowsCounter from "./TableRowsCounter";

const meta: Meta<typeof TableRowsCounter> = {
    component: TableRowsCounter,
    title: "DataTable/Rows Counter",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableRowsCounter>;

export const Default: Story = {
    args: {
        tableRowsCount: 10,
        tableSelectedRowsCount: 3,
    },
};
