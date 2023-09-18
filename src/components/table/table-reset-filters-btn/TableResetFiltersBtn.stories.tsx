import type { Meta, StoryObj } from "@storybook/react";
import TableResetFiltersBtn from "./TableResetFiltersBtn";

const meta = {
    component: TableResetFiltersBtn,
    title: "DataTable/Toolbar/Reset Filters Button",
    tags: ["autodocs"],
} satisfies Meta<typeof TableResetFiltersBtn>;

export default meta;

type Story = StoryObj<typeof TableResetFiltersBtn>;

export const Default: Story = {
    args: {
        isFiltered: true,
        resetFilters: () => console.log("filters reseted"),
    },
};
