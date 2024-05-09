import { Heading, Stack } from "@chakra-ui/react";

export interface InfoItemProps {
  title: string;
  description: string;
}

const InfoItem = ({ title, description }: InfoItemProps) => (
  <Stack
    direction="column"
    gap={2}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    paddingBottom={2}
  >
    <Heading as="h3" size="sm" color="gray.700">
      {title}
    </Heading>
    <Heading as="h4" size="xs" color="gray.600" fontWeight="normal">
      {description}
    </Heading>
  </Stack>
);

export default InfoItem;
