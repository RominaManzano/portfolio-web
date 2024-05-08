import { experienceItems, personalExperienceItems } from "@/data/experience";
import { Divider, Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import ProjectCard from "../organisms/ProjectCard";
import TimeLine from "../organisms/TimeLine";

const Experience = () => (
  <Stack>
    <Heading as="h1" size="lg" mb={2}>
      Experience
    </Heading>

    <Heading as="h2" size="md" mb={4}>
      Professional Experience
    </Heading>

    <TimeLine items={experienceItems} />

    <Divider my={4} color="gray.600" borderWidth="1px" />

    <Heading as="h2" size="md" mb={4}>
      Freelance/Personal Projects
    </Heading>

    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={4}
    >
      {personalExperienceItems.map((item) => (
        <GridItem key={item.title} display="flex" justifyContent="center">
          <ProjectCard {...item} />
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Experience;
