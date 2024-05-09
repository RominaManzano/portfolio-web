"use client";

import { technologiesIconMap } from "@/data/technologies";
import { Card, CardBody } from "@chakra-ui/react";
import { IconContext } from "react-icons";

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => {
  const techIcon = technologiesIconMap[name];

  if (!techIcon) return null;

  return (
    <Card
      aria-label={name}
      width="100px"
      height="100px"
      _hover={{
        transform: "scale(1.1)",
        transition: "all 0.2s ease-in-out",
        outline: `1px solid ${techIcon.color}`,
      }}
    >
      <CardBody>
        <IconContext.Provider value={{ color: techIcon.color, size: "60px" }}>
          {techIcon.icon}
        </IconContext.Provider>
      </CardBody>
    </Card>
  );
};

export default TechBadge;
