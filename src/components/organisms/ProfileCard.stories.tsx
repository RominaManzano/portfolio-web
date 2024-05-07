import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Organisms/ProfileCard",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    name: "Romina Manzano",
    title: "Systems Engineer",
    infoItems: [
      {
        title: "Frontend Engineer",
        description:
          "8 years of experience in web development, with a strong focus on frontend",
      },
      {
        title: "Tech Lead",
        description:
          "3 years of experience leading and training a team of developers",
      },
      {
        title: "Community Co-founder",
        description: "Co-created a community of like-minded React developers",
      },
    ],
  },
};
