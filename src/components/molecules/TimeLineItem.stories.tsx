import { experienceItems } from "@/data/experience";
import type { Meta, StoryObj } from "@storybook/react";
import TimeLineItem from "./TimeLineItem";

const meta: Meta<typeof TimeLineItem> = {
  title: "Molecules/TimeLineItem",
  component: TimeLineItem,
};

export default meta;
type Story = StoryObj<typeof TimeLineItem>;

export const Default: Story = {
  args: {
    ...experienceItems[0],
    link: undefined,
  },
};

export const LastItem: Story = {
  args: {
    ...Default.args,
    isLast: true,
  },
};

export const WithLink: Story = {
  args: {
    ...experienceItems[0],
  },
};
