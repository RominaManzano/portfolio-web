import { render, screen } from "@testing-library/react";
import TechBadge from "../TechBadge";

describe("<TechBadge />", () => {
  it("should not render if an invalid name is provided", () => {
    const name = "invalid-name";
    render(<TechBadge name={name} />);
    const techBagde = screen.queryByLabelText(name);

    expect(techBagde).not.toBeInTheDocument();
  });

  it("should render a valid name", () => {
    const name = "react-js";
    render(<TechBadge name={name} />);
    const techBagde = screen.getByLabelText(name);

    expect(techBagde).toBeInTheDocument();
  });
});
