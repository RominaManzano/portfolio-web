import { personalExperienceItems } from "@/data/experience";
import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "../ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Organisms/ProjectCard",
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    ...personalExperienceItems[1],
  },
};

export const WithLink: Story = {
  args: {
    ...personalExperienceItems[0],
  },
};
