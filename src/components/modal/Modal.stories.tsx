import type { Meta, StoryObj } from "@storybook/react";
import {
    reactRouterParameters,
    withRouter,
} from "storybook-addon-react-router-v6";
import Dialog from "./Modal";

const ModalContent = () => {
    return (
        <p className="bg-slate-200 h-48 w-full flex items-center justify-center text-3xl text-slate-500 rounded-lg">
            Modal Content
        </p>
    );
};

const meta = {
    component: Dialog,
    title: "Dialog",
    decorators: [withRouter],
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
        show: true,
        title: "Dialog title",
        handleSubmit(e) {
            e.preventDefault();
            console.log("Dialog submitted");
            return true;
        },
        handleClose() {
            console.log("Dialog closed");
        },
        children: <ModalContent />,
    },
};

export const WithoutTitle: Story = {
    args: {
        show: true,
        handleSubmit(e) {
            e.preventDefault();
            console.log("Dialog submitted");
            return true;
        },
        handleClose() {
            console.log("Dialog closed");
        },
        children: <ModalContent />,
    },
};
