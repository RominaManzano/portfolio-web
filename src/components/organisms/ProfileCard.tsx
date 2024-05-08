import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import InfoItem, { InfoItemProps } from "../molecules/InfoItem";

interface ProfileCardProps {
  name: string;
  title: string;
  image?: string;
  infoItems?: InfoItemProps[];
}

const ProfileCard = ({ name, title, image, infoItems }: ProfileCardProps) => {
  return (
    <Card>
      <CardBody>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          gap={4}
        >
          <Stack direction="column" alignItems="center" flex={1}>
            {image ? (
              <Box rounded="full" overflow="hidden">
                <Image
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                  priority
                />
              </Box>
            ) : null}
            <Heading as="h1" size={{ base: "md", xl: "lg" }} color="gray.700">
              {name}
            </Heading>
            <Heading as="h2" size={{ base: "sm", xl: "md" }} color="gray.500">
              {title}
            </Heading>
          </Stack>

          <Stack direction="column" flex={2} gap={4}>
            {infoItems?.map((item) => <InfoItem key={item.title} {...item} />)}
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
