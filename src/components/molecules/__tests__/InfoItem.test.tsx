import { render } from "@testing-library/react";
import InfoItem from "../InfoItem";

describe("<InfoItem />", () => {
  it("should render the title and description correctly", () => {
    const title = "Frontend Engineer";
    const description = "8 years of experience in web development";
    const { getByText } = render(
      <InfoItem title={title} description={description} />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
