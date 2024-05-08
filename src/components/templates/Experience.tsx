import { Divider, Heading, Stack } from "@chakra-ui/react";
import TimeLine from "../organisms/TimeLine";
import { experienceItems } from "@/data/experience";

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
  </Stack>
);

export default Experience;
