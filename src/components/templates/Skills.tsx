import { technologiesIconMap } from "@/data/technologies";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import TechBadge from "../atoms/TechBadge";

const Skills = () => (
  <Stack id="skills-and-tools">
    <Heading as="h1" size="lg" mb={2}>
      Skills & Tools
    </Heading>

    <Grid gap={8} templateColumns="repeat(5, minmax(100px, 1fr))">
      {Object.keys(technologiesIconMap).map((tech) => (
        <GridItem key={tech} display="flex" justifyContent="center">
          <TechBadge name={tech} />
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Skills;
