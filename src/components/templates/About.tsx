import { infoItems } from "@/data/info";
import profilePicture from "../../images/RominaManzano.jpg";
import ProfileCard from "../organisms/ProfileCard";

const About = () => (
  <ProfileCard
    name="Romina Manzano"
    title="Systems Engineer"
    infoItems={infoItems}
    image={profilePicture.src}
  />
);

export default About;
