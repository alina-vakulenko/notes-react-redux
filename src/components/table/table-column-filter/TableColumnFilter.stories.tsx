import type { Meta, StoryObj } from "@storybook/react";
import { RxArrowUp, RxArrowDown, RxArrowRight } from "react-icons/rx";
import TableColumnFilter from "./TableColumnFilter";

const options = [
    { value: "low", label: "low", icon: () => <RxArrowDown /> },
    { value: "medium", label: "medium", icon: () => <RxArrowRight /> },
    { value: "high", label: "high", icon: () => <RxArrowUp /> },
];

const columnValuesMap = new Map();
columnValuesMap.set("low", 3);
columnValuesMap.set("medium", 7);
columnValuesMap.set("high", 2);

const meta: Meta<typeof TableColumnFilter> = {
    component: TableColumnFilter,
    title: "DataTable/Toolbar/Column Filter",
    tags: ["autodocs"],
    // argTypes: {
    //     options: {
    //         control: "object",
    //     },
    //     columnValuesMap: {
    //         control: "object",
    //     },
    // },
    args: {
        title: "priority",
        options,
        columnValuesMap,
        columnFilteredValues: new Set(),
    },
};

const selectedOne = new Set(["low"]);
const selectedTwo = new Set(["low", "medium"]);
const selectedMore = new Set(["low", "medium", "high"]);

export default meta;
type Story = StoryObj<typeof TableColumnFilter>;

export const Default: Story = {};

export const SelectedOne: Story = {
    args: {
        columnFilteredValues: selectedOne,
        clearColumnFilter: () => console.log("clear"),
    },
};

export const SelectedTwo: Story = {
    args: {
        columnFilteredValues: selectedTwo,
    },
};

export const SelectedMore: Story = {
    args: {
        columnFilteredValues: selectedMore,
    },
};
