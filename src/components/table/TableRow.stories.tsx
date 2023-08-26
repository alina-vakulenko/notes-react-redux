import type { Meta, StoryObj } from "@storybook/react";
import TableRow from "./TableRow";

const meta = {
    component: TableRow,
    title: "Generic Table/Row",
    tags: ["autodocs"],
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
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
