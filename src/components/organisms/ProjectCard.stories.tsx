import type { Meta, StoryObj } from "@storybook/react";
import ProjectCard from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "Organisms/ProjectCard",
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: "Project Title",
    imageUrl: "https://via.placeholder.com/300x200",
    description: "This is a brief description of the project",
    technologies: ["react-js", "next-js", "chakra-ui"],
  },
  render: (args) => (
    <>
      <ProjectCard {...args} />
    </>
  ),
};
