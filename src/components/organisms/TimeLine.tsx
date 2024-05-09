import { Stack } from "@chakra-ui/react";
import TimeLineItem, { TimeLineItemProps } from "../molecules/TimeLineItem";

interface TimeLineProps {
  items: TimeLineItemProps[];
}

const TimeLine = ({ items }: TimeLineProps) => (
  <Stack direction="column" gap={4}>
    {items.map((item, index) => (
      <TimeLineItem
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        startDate={item.startDate}
        endDate={item.endDate}
        link={item.link}
        isLast={index === items.length - 1}
      />
    ))}
  </Stack>
);

export default TimeLine;
