import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const variants = [
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
];

const sizes = ["default", "sm", "lg", "icon"];

const meta = {
    component: Button,
    title: "Button",
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Variants = (args) => {
    return (
        <div className="flex gap-3">
            {variants.map((variant) => (
                <Button key={variant} {...args} variant={variant}>
                    {variant}
                </Button>
            ))}
        </div>
    );
};

export const Sizes = (args) => {
    return (
        <div className="flex gap-3">
            {sizes.map((size) => (
                <Button key={size} {...args} size={size}>
                    {size}
                </Button>
            ))}
        </div>
    );
};
