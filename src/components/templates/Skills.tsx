import { technologiesIconMap } from "@/data/technologies";
import { Grid, GridItem, Heading, Stack } from "@chakra-ui/react";
import TechBadge from "../atoms/TechBadge";

const Skills = () => (
  <Stack id="skills-and-tools">
    <Heading as="h1" size="lg" mb={2}>
      Skills & Tools
    </Heading>

    <Grid
      gap={8}
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
    >
      {Object.keys(technologiesIconMap).map((tech) => (
        <GridItem key={tech} display="flex" justifyContent="center">
          <TechBadge name={tech} />
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Skills;
