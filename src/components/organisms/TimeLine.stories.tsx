import { experienceItems } from "@/data/experience";
import type { Meta, StoryObj } from "@storybook/react";
import TimeLine from "./TimeLine";

const meta: Meta<typeof TimeLine> = {
  title: "Organisms/TimeLine",
  component: TimeLine,
};

export default meta;
type Story = StoryObj<typeof TimeLine>;

export const Default: Story = {
  args: {
    items: experienceItems,
  },
};
