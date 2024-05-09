import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "../atoms/TechIcon";

export interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link?: { url: string; text: string };
  technologies: string[];
}

const ProjectCard = ({
  title,
  imageUrl,
  description,
  link,
  technologies,
}: ProjectCardProps) => (
  <Card maxW="xs" rounded="lg">
    <Stack
      position="relative"
      justifyContent="center"
      alignItems="center"
      width="full"
    >
      <Box
        width="full"
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        filter="brightness(0.8)"
        _hover={{ filter: "brightness(1)" }}
        overflow="hidden"
      >
        <Image src={imageUrl} alt={title} width={350} height={300} />
      </Box>
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
      <Text as="p" mb={2}>
        {description}
      </Text>
      {link ? (
        <Text
          color="teal.600"
          fontWeight="semibold"
          _hover={{ color: "teal.500", textDecoration: "underline" }}
        >
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {link.text}
          </Link>
        </Text>
      ) : null}
    </CardBody>
    <CardFooter pt={0}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        {technologies.map((tech) => (
          <TechIcon key={tech} name={tech} />
        ))}
      </Stack>
    </CardFooter>
  </Card>
);

export default ProjectCard;
