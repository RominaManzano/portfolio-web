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
    items: [
      {
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
      {
        title: "Frontend Technical Leader",
        subtitle: "At Nimble.LA",
        description:
          "Trained 3 developers from JR to SSR. Managed a team of 4 frontend engineers with different seniorities. Led efforts to apply best practices, add unit testing, configure CI/CD, improve web app performance and web vitals, set up code review processes and development standards throughout all frontend projects and the company in general.",
        startDate: "2019-03-01",
        endDate: "2023-09-22",
        link: {
          url: "https://www.nimble.la/",
          text: "Nimble.LA",
        },
      },
      {
        title: "Fullstack Web Developer",
        subtitle: "At Nimble.LA",
        description:
          "Initially worked with the MEAN stack, moving later on towards ReactJS on the frontend.",
        startDate: "2016-06-01",
        endDate: "2019-02-28",
        link: {
          url: "https://www.nimble.la/",
          text: "Nimble.LA",
        },
      },
    ],
  },
};
