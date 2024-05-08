"use client";

import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaCircle } from "react-icons/fa";

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
  isLast?: boolean;
}

const TimeLineItem = ({
  title,
  subtitle,
  description,
  startDate,
  endDate,
  link,
  isLast = false,
}: TimeLineItemProps) => {
  return (
    <Stack direction="row">
      <Stack alignItems="center">
        <div>
          <IconContext.Provider value={{ color: "#2493a7" }}>
            <MdVerified size={28} />
          </IconContext.Provider>
        </div>
        <Divider orientation="vertical" color="gray.600" borderWidth="1px" />
        {isLast ? (
          <div>
            <IconContext.Provider value={{ color: "#2493a7" }}>
              <FaCircle size={8} />
            </IconContext.Provider>
          </div>
        ) : null}
      </Stack>

      <Stack>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Heading as="h4" size="sm" fontWeight="semibold" color="gray.600">
          {subtitle}
        </Heading>
        <Heading as="h5" size="xs" fontWeight="normal" color="gray.700">
          {startDate} to {endDate}
        </Heading>
        <Text as="p" marginTop={2} fontSize={{ base: "sm", md: "md" }}>
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
      </Stack>
    </Stack>
  );
};

export default TimeLineItem;
