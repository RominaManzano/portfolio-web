import { infoItems } from "@/data/info";
import profilePicture from "../../images/RominaManzano.jpg";
import ProfileCard from "../organisms/ProfileCard";

const About = () => (
  <div id="about">
    <ProfileCard
      name="Romina Manzano"
      title="Systems Engineer"
      infoItems={infoItems}
      image={profilePicture.src}
    />
  </div>
);

export default About;
