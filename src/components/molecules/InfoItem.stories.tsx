import type { Meta, StoryObj } from "@storybook/react";
import InfoItem from "./InfoItem";

const meta: Meta<typeof InfoItem> = {
  title: "Molecules/InfoItem",
  component: InfoItem,
};

export default meta;
type Story = StoryObj<typeof InfoItem>;

export const Default: Story = {
  args: {
    title: "Frontend Engineer",
    description: "8 years of experience in web development",
  },
};
