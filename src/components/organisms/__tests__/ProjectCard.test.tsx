import { render } from "@testing-library/react";
import ProjectCard from "../ProjectCard";

const title = "Project Title";
const imageUrl = "https://placehold.co/600x400";
const description = "Project Description";
const link = {
  url: "https://example.com",
  text: "View Project",
};
const technologies = ["react-js", "next-js"];

describe("<ProjectCard />", () => {
  it("should render correctly", () => {
    const { getByText, getByRole } = render(
      <ProjectCard
        title={title}
        imageUrl={imageUrl}
        description={description}
        technologies={[]}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByRole("img")).toBeInTheDocument();
  });

  it("should render the link correctly, when link is provided", () => {
    const { getByRole, getByText } = render(
      <ProjectCard
        title={title}
        imageUrl={imageUrl}
        description={description}
        link={link}
        technologies={[]}
      />
    );

    expect(getByRole("link")).toBeInTheDocument();
    expect(getByText(link.text)).toBeInTheDocument();
  });

  it("should render the technologies correctly, when technologies are provided", () => {
    const { getByLabelText } = render(
      <ProjectCard
        title={title}
        imageUrl={imageUrl}
        description={description}
        technologies={technologies}
      />
    );

    technologies.forEach((technology) => {
      expect(getByLabelText(technology)).toBeInTheDocument();
    });
  });
});
