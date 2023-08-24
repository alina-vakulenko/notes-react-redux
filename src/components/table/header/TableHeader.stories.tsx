import type { Meta, StoryObj } from "@storybook/react";
import {
    BsFillPencilFill,
    BsFillTrashFill,
    BsFillFileEarmarkZipFill,
} from "react-icons/bs";
import TableHeader from "./TableHeader";

const meta = {
    component: TableHeader,
    title: "Generic Table/Header",
    tags: ["autodocs"],
} satisfies Meta<typeof TableHeader>;

export default meta;

type Story = StoryObj<typeof TableHeader>;

const headers = [
    {
        key: "name",
        header: "Name",
    },
    {
        key: "created",
        header: "Created",
    },
    { key: "category", header: "Category", align: "center" },
    { key: "content", header: "Content" },
    {
        key: "dates",
        header: "Dates",
    },
];

const actions = [
    {
        key: "edit",
        header: <BsFillPencilFill />,
    },
    {
        key: "archive",
        header: <BsFillFileEarmarkZipFill />,
    },
    {
        key: "remove",
        header: <BsFillTrashFill />,
    },
];

export const Default: Story = {
    args: {
        columns: headers,
    },
};

export const WithActions: Story = {
    args: {
        ...Default.args,
        actions: actions,
    },
};
