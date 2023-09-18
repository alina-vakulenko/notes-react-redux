import type { Meta, StoryObj } from "@storybook/react";
import ThemeSwitch from "./ThemeSwitch";
import ThemeContextProvider from "@/context/themeContext";

const meta: Meta<typeof ThemeSwitch> = {
    component: ThemeSwitch,
    title: "Theme Switch",
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <ThemeContextProvider>
                <Story />
            </ThemeContextProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ThemeSwitch>;

export const Default: Story = {};
