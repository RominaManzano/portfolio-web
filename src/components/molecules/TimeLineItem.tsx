import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

export interface TimeLineItemProps {
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate?: string;
  link?: {
    url: string;
    text: string;
  };
}

const TimeLineItem = ({
  title,
  subtitle,
  description,
  startDate,
  endDate,
  link,
}: TimeLineItemProps) => {
  return (
    <Stack direction="row">
      <Stack alignItems="center">
        <MdVerified size={32} />
        <Divider orientation="vertical" />
      </Stack>

      <Stack>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Heading as="h4" size="sm">
          {subtitle}
        </Heading>
        <Heading as="h5" size="xs">
          {startDate} to {endDate}
        </Heading>
        <Text as="p">{description}</Text>
        {link && (
          <Link href={link.url} target="_blank">
            {link.text}
          </Link>
        )}
      </Stack>
    </Stack>
  );
};

export default TimeLineItem;
