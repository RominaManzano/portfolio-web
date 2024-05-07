import { Avatar, Card, CardBody, Heading, Stack } from "@chakra-ui/react";

interface ProfileCardProps {
  name: string;
  title: string;
  image?: string;
}

const ProfileCard = ({ name, title, image }: ProfileCardProps) => {
  return (
    <Card>
      <CardBody>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          gap={4}
        >
          <Stack direction="column" alignItems="center">
            <Avatar name={name} src={image} size="2xl" />
            <Heading as="h1" size="lg">
              {name}
            </Heading>
            <Heading as="h2" size="md">
              {title}
            </Heading>
          </Stack>
          <div>INFO</div>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
