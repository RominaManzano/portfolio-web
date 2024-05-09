import { experienceItems, personalExperienceItems } from "@/data/experience";
import {
  Divider,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import ProjectCard from "../organisms/ProjectCard";
import TimeLine from "../organisms/TimeLine";

const Experience = () => (
  <Stack id="experience">
    <Heading as="h1" size="lg" mb={2}>
      Experience
    </Heading>

    <Heading as="h2" size="md" mb={4} id="professional-experience">
      Professional Experience
    </Heading>

    <TimeLine items={experienceItems} />

    <Divider my={4} color="gray.600" borderWidth="1px" />

    <Heading as="h2" size="md" mb={4} id="freelance-personal-projects">
      Freelance/Personal Projects
    </Heading>

    <SimpleGrid
      spacing={4}
      templateColumns={{
        base: "repeat(1, minmax(250px, 1fr))",
        md: "repeat(2, minmax(300px, 1fr))",
      }}
    >
      {personalExperienceItems.map((item) => (
        <GridItem key={item.title} display="flex" justifyContent="center">
          <ProjectCard {...item} />
        </GridItem>
      ))}
    </SimpleGrid>
  </Stack>
);

export default Experience;
