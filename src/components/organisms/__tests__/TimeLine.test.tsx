import { experienceItems } from "@/data/experience";
import { render } from "@testing-library/react";
import TimeLine from "../TimeLine";

describe("<TimeLine />", () => {
  it("should render correctly", () => {
    const { getByText } = render(<TimeLine items={experienceItems} />);

    experienceItems.forEach((experience) => {
      expect(getByText(experience.title)).toBeInTheDocument();
    });
  });
});
