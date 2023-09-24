import type { Meta, StoryObj } from "@storybook/react";
import TableRowsToggleMenu from "./TableRowsToggleMenu";

const meta: Meta<typeof TableRowsToggleMenu> = {
    component: TableRowsToggleMenu,
    title: "DataTable/Toolbar/Toggle Rows Menu",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableRowsToggleMenu>;

export const Checked: Story = {
    args: {
        checked: true,
    },
};

export const Unchecked: Story = {
    args: {
        checked: false,
    },
};
