import type { Meta, StoryObj } from "@storybook/react";

import ProfileCard from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Organisms/ProfileCard",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {};
