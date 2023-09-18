import type { Meta, StoryObj } from "@storybook/react";
import TableColumnHeader from "./TableColumnHeader";

const meta: Meta<typeof TableColumnHeader> = {
    component: TableColumnHeader,
    title: "DataTable/Toolbar/Toggle columns view",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableColumnHeader>;

export const Default: Story = {
    args: {
        title: "Column title",
        column: {},
    },
};
