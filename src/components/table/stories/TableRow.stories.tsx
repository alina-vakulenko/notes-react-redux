import type { Meta, StoryObj } from "@storybook/react";
import TableRecord from "../TableRecord";

const meta = {
    component: TableRecord,
    title: "Generic Table/Row",
    tags: ["autodocs"],
} satisfies Meta<typeof TableRecord>;

export default meta;

type Story = StoryObj<typeof TableRecord>;

export const Default: Story = {
    args: {
        isSelected: false,
        cells: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, bread, eggs",
            dates: "",
            archived: true,
        },
    },
};

export const Archived: Story = {
    args: {
        data: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, bread, eggs",
            dates: "",
            archived: true,
        },
        actions: [],
    },
};

export const WithDates: Story = {
    args: {
        data: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, 3/8/2023, eggs",
            dates: "",
            archived: true,
        },
        actions: [],
    },
};

export const WithActions: Story = {
    args: {
        data: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, bread, eggs",
            dates: "",
            archived: false,
        },
    },
};

export const ExampleRowWithoutActions: Story = {
    args: {
        data: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, 3/8/2023, eggs",
            dates: "",
            archived: true,
        },
    },
};

export const ExampleRowWithActions: Story = {
    args: {
        data: {
            id: "0",
            name: "Shopping list",
            created: "April 20, 2021",
            category: "Task",
            content: "tomatoes, 3/8/2023, eggs",
            dates: "",
            archived: true,
        },
        actions: [],
    },
};
