import type { Meta, StoryObj } from "@storybook/react";
import RowsCounter from "../RowsCounter";

const meta: Meta<typeof RowsCounter> = {
    component: RowsCounter,
    title: "Generic Table/Rows Counter",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RowsCounter>;

export const Default: Story = {
    args: {
        tableRowsCount: 10,
        tableSelectedRowsCount: 3,
    },
};
