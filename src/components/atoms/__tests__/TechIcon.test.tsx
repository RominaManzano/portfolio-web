import { render } from "@testing-library/react";
import TechIcon from "../TechIcon";

describe("<TechIcon />", () => {
  it("should not render if an invalid name is provided", () => {
    const name = "invalid-name";
    const { queryByLabelText } = render(<TechIcon name={name} />);
    const techIcon = queryByLabelText(name);

    expect(techIcon).not.toBeInTheDocument();
  });

  it("should render a valid name", () => {
    const name = "react-js";
    const { queryByLabelText } = render(<TechIcon name={name} />);
    const techIcon = queryByLabelText(name);

    expect(techIcon).toBeInTheDocument();
  });
});
