import type { Meta, StoryObj } from "@storybook/react";
import {
    reactRouterParameters,
    withRouter,
} from "storybook-addon-react-router-v6";
import Dialog from "./Dialog";

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
        title: "Dialog title",
        handleSubmit(e) {
            e.preventDefault();
            console.log("Dialog submitted");
            return true;
        },
        handleClose() {
            console.log("Dialog closed");
        },
        children: (
            <p className="bg-slate-400 h-48 w-full flex items-center justify-center text-3xl text-slate-700">
                Modal Content
            </p>
        ),
    },
};

export const WithoutTitle: Story = {
    args: {
        handleSubmit(e) {
            e.preventDefault();
            console.log("Dialog submitted");
            return true;
        },
        handleClose() {
            console.log("Dialog closed");
        },
        children: (
            <p className="bg-slate-400 h-48 w-full flex items-center justify-center text-3xl text-slate-700">
                Modal Content
            </p>
        ),
    },
};
