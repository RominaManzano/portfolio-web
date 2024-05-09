import { render } from "@testing-library/react";
import TechBadge from "../TechBadge";

describe("<TechBadge />", () => {
  it("should not render if an invalid name is provided", () => {
    const name = "invalid-name";
    const { queryByLabelText } = render(<TechBadge name={name} />);
    const techBagde = queryByLabelText(name);

    expect(techBagde).not.toBeInTheDocument();
  });

  it("should render a valid name", () => {
    const name = "react-js";
    const { queryByLabelText } = render(<TechBadge name={name} />);
    const techBagde = queryByLabelText(name);

    expect(techBagde).toBeInTheDocument();
  });
});
