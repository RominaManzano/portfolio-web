import { technologiesIconMap } from "@/data/technologies";
import type { Meta, StoryObj } from "@storybook/react";
import TechBadge from "../TechBadge";

const meta: Meta<typeof TechBadge> = {
  title: "Atoms/TechBadge",
  component: TechBadge,
  argTypes: {
    name: {
      options: Object.keys(technologiesIconMap),
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TechBadge>;

export const Default: Story = {
  args: {
    name: "react-js",
  },
};
