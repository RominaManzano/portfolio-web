import { render, screen } from "@testing-library/react";
import TechIcon from "../TechIcon";

describe("<TechIcon />", () => {
  it("should not render if an invalid name is provided", () => {
    const name = "invalid-name";
    render(<TechIcon name={name} />);
    const techIcon = screen.queryByLabelText(name);

    expect(techIcon).not.toBeInTheDocument();
  });

  it("should render a valid name", () => {
    const name = "react-js";
    render(<TechIcon name={name} />);
    const techIcon = screen.getByLabelText(name);

    expect(techIcon).toBeInTheDocument();
  });
});
