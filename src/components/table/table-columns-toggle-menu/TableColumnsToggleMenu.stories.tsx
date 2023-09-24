import type { Meta, StoryObj } from "@storybook/react";
import TableColumnsToggleMenu from "./TableColumnsToggleMenu";

const meta: Meta<typeof TableColumnsToggleMenu> = {
    component: TableColumnsToggleMenu,
    title: "DataTable/Toolbar/Toggle columns view",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TableColumnsToggleMenu>;

export const Default: Story = {
    args: {
        columns: [],
    },
};
