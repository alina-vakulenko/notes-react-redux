import type { Meta, StoryObj } from "@storybook/react";
import TableToggleRowsView from "./TableToggleRowsView";

const meta: Meta<typeof TableToggleRowsView> = {
    component: TableToggleRowsView,
    title: "DataTable/Toolbar/Toggle Rows View",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableToggleRowsView>;

export const Checked: Story = {
    args: {
        label: "Show",
        checked: true,
    },
};

export const Unchecked: Story = {
    args: {
        label: "Show",
        checked: false,
    },
};
