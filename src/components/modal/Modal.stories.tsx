import type { Meta, StoryObj } from "@storybook/react";
import {
    reactRouterParameters,
    withRouter,
} from "storybook-addon-react-router-v6";
import Dialog from "./Modal";

const ModalContent = () => {
    return (
        <p className="bg-popover h-48 w-full flex items-center justify-center text-3xl text-foreground rounded-lg">
            Modal Content
        </p>
    );
};

const meta = {
    component: Dialog,
    title: "Dialog",
    decorators: [withRouter],
    args: {
        isOpen: true,
        children: <ModalContent />,
        onClose() {
            console.log("Dialog closed");
        },
    },
    parameters: {
        reactRouter: reactRouterParameters({
            location: {
                searchParams: { createNote: "y" },
            },
        }),
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
    args: {
        title: "Dialog title",
    },
};

export const WithoutTitle: Story = {};
