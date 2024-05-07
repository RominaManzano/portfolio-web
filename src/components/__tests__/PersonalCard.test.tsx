import React from "react";
import { render } from "@testing-library/react";

import PersonalCard from "../PersonalCard";

describe("<PersonalCard />", () => {
  it("should render the name and title correctly", () => {
    const { getByText } = render(<PersonalCard />);
    expect(getByText("Romina Manzano")).toBeInTheDocument();
    expect(
      getByText("Systems Engineer & Frontend Web Developer")
    ).toBeInTheDocument();
  });

  it("should render the correct text in the first paragraph", () => {
    const { getByText } = render(<PersonalCard />);
    expect(getByText(/Back in 2008/)).toBeInTheDocument();
  });

  it("should render the correct text in the second paragraph", () => {
    const { getByText } = render(<PersonalCard />);
    expect(getByText(/Nowadays, my main focus/)).toBeInTheDocument();
  });
});
