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
    title: "Frontend Engineer",
    subtitle: "Software Engineer II at TrovaTrip",
    description:
      "Worked with the MERN stack contributing to the different web products across the company. Improved my TypeScript, Storybook and micro-frontends knowledge and led the efforts to include unit testing to the main application.",
    startDate: "2023-09-25",
    endDate: "2024-05-02",
    link: {
      url: "https://trovatrip.com/",
      text: "TrovaTrip",
    },
  },
};
