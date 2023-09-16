import type { Meta, StoryObj } from "@storybook/react";
import PageIndicator from "../PageIndicator";

const meta: Meta<typeof PageIndicator> = {
    component: PageIndicator,
    title: "Pagination/PageIndicator",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageIndicator>;

export const Default: Story = {
    args: {
        currentPage: 1,
        pageCount: 10,
    },
};
