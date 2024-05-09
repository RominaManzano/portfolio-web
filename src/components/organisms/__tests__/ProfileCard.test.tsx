import { render } from "@testing-library/react";
import ProfileCard from "../ProfileCard";

const name = "Romina";
const title = "Systems Engineer";
const image = "https://placehold.co/600x400";
const infoItems = [
  { title: "Title 1", description: "Description 1" },
  { title: "Title 2", description: "Description 2" },
];

describe("<ProfileCard />", () => {
  it("should render correctly", () => {
    const { getByText, queryByRole } = render(
      <ProfileCard name={name} title={title} />
    );

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(queryByRole("img")).not.toBeInTheDocument();
  });

  it("should render the image correctly, when image is provided", () => {
    const { getByRole } = render(
      <ProfileCard name={name} title={title} image={image} />
    );

    expect(getByRole("img")).toBeInTheDocument();
  });

  it("should render the info items correctly, when info items are provided", () => {
    const { getByText } = render(
      <ProfileCard name={name} title={title} infoItems={infoItems} />
    );

    infoItems.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
    });
  });
});
