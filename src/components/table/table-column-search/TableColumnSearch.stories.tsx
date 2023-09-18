import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TableColumnSearch from "./TableColumnSearch";

const meta = {
    component: TableColumnSearch,
    title: "DataTable/Toolbar/Search Input",
    tags: ["autodocs"],
} satisfies Meta<typeof TableColumnSearch>;

export default meta;

type Story = StoryObj<typeof TableColumnSearch>;

export const Default: Story = {
    args: {
        searchValue: "",
        onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value),
    },
};
