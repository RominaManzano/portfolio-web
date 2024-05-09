import { experienceItems } from "@/data/experience";
import { render } from "@testing-library/react";
import TimeLineItem from "../TimeLineItem";

const experience = experienceItems[0];

describe("<TimeLineItem />", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <TimeLineItem
        title={experience.title}
        subtitle={experience.subtitle}
        description={experience.description}
        startDate={experience.startDate}
      />
    );

    expect(getByText(experience.title)).toBeInTheDocument();
    expect(getByText(experience.subtitle)).toBeInTheDocument();
    expect(getByText(experience.description)).toBeInTheDocument();
    expect(getByText(`${experience.startDate} to present`)).toBeInTheDocument();
  });

  it("should render the start and end date correctly, when end date is provided", () => {
    const { getByText } = render(
      <TimeLineItem
        title={experience.title}
        subtitle={experience.subtitle}
        description={experience.description}
        startDate={experience.startDate}
        endDate={experience.endDate}
      />
    );

    expect(
      getByText(`${experience.startDate} to ${experience.endDate}`)
    ).toBeInTheDocument();
  });

  it("should render the link correctly, when link is provided", () => {
    const link = experience.link!;
    const { getByRole, getByText } = render(
      <TimeLineItem
        title={experience.title}
        subtitle={experience.subtitle}
        description={experience.description}
        startDate={experience.startDate}
        link={link}
      />
    );

    expect(getByRole("link")).toBeInTheDocument();
    expect(getByText(link.text)).toBeInTheDocument();
  });

  it("should render the starting point correctly, when isLast is true", () => {
    const { getByLabelText } = render(
      <TimeLineItem
        title={experience.title}
        subtitle={experience.subtitle}
        description={experience.description}
        startDate={experience.startDate}
        isLast
      />
    );

    expect(getByLabelText("starting-point")).toBeInTheDocument();
  });
});
