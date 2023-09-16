import type { Meta, StoryObj } from "@storybook/react";
import PaginationButtons from "../PaginationButtons";
import PaginationBtn from "../PaginationBtn";

const meta: Meta<typeof PaginationButtons> = {
    component: PaginationButtons,
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
    title: "Pagination/Buttons",
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PaginationButtons>;

// export const Default: Story = {
//     args: {
//         pageCount: 10,
//         isPrevPage: true,
//         isNextPage: true,
//         getPrevPage: () => console.log("prev page"),
//         getNextPage: () => console.log("next page"),
//         setPage: () => console.log("set page"),
//     },
// };

export const Simple: Story = {
    render: (args) => {
        return (
            <div>
                <PaginationBtn
                    {...args}
                    onClick={args.getPrevPage}
                    disabled={!args.isPrevPage}
                >
                    Previous page
                </PaginationBtn>
                <PaginationBtn
                    {...args}
                    onClick={args.getNextPage}
                    disabled={!args.isNextPage}
                >
                    Next page
                </PaginationBtn>
            </div>
        );
    },
};

export const Disabled: Story = {
    render: (args) => {
        return (
            <div className="flex flex-col gap-3">
                <PaginationButtons
                    {...args}
                    isPrevPage={false}
                    isNextPage={true}
                />
                <PaginationButtons
                    {...args}
                    isPrevPage={true}
                    isNextPage={false}
                />
            </div>
        );
    },
};
