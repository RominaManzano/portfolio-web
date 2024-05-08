import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface ProjectCatdProps {
  title: string;
  imageUrl: string;
  description: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  imageUrl,
  description,
  technologies,
}: ProjectCatdProps) => {
  return (
    <Card maxW="xs" rounded="lg">
      <Stack
        position="relative"
        justifyContent="center"
        alignItems="center"
        width="full"
      >
        <Image
          src={imageUrl}
          alt={title}
          width="full"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          filter="brightness(0.8)"
          _hover={{ filter: "brightness(0.9)" }}
        />
        <Heading
          as="h4"
          size="lg"
          position="absolute"
          color="white"
          textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
        >
          {title}
        </Heading>
      </Stack>
      <CardBody>
        <Text as="p">{description}</Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
