import type { Meta, StoryObj } from "@storybook/react";
import PaginationNavigation from "./PaginationNavigation";

const meta: Meta<typeof PaginationNavigation> = {
    component: PaginationNavigation,
    decorators: [
        (Story) => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Story />
            </div>
        ),
    ],
    title: "Pagination/Navigation",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PaginationNavigation>;

export const Default: Story = {
    args: {
        pageCount: 100,
        isPrevPage: true,
        isNextPage: true,
        // getPrevPage,
        // getNextPage,
        // setPage,
    },
};
