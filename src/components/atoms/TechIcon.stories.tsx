import type { Meta, StoryObj } from "@storybook/react";
import TechIcon, { technologiesIconMap } from "./TechIcon";

const meta: Meta<typeof TechIcon> = {
  title: "Atoms/TechIcon",
  component: TechIcon,
  argTypes: {
    name: {
      options: Object.keys(technologiesIconMap),
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TechIcon>;

export const Default: Story = {
  args: {
    name: "react-js",
  },
};
