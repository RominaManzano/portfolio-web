import ProfileCard from "../organisms/ProfileCard";

const About = () => {
  const infoItems = [
    {
      title: "Frontend Engineer",
      description:
        "8 years of experience in web development, with a strong focus on frontend",
    },
    {
      title: "Tech Lead",
      description:
        "3 years of experience leading and training a team of developers",
    },
    {
      title: "Community Co-founder",
      description: "Co-created a community of like-minded React developers",
    },
  ];

  return (
    <ProfileCard
      name="Romina Manzano"
      title="Systems Engineer"
      infoItems={infoItems}
    />
  );
};

export default About;
