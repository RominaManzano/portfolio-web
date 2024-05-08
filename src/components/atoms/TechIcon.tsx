"use client";

import { technologiesIconMap } from "@/data/technologies";
import { Stack } from "@chakra-ui/react";
import { IconContext } from "react-icons";

interface TechIconProps {
  name: string;
}

const TechIcon = ({ name }: TechIconProps) => {
  const techIcon = technologiesIconMap[name];

  if (!techIcon) return null;

  return (
    <Stack
      aria-label={name}
      alignItems="center"
      justifyContent="center"
      border="1px solid"
      borderColor="gray.200"
      padding={1}
      boxSize={9}
      rounded="full"
    >
      <IconContext.Provider value={{ color: techIcon.color, size: "2em" }}>
        {techIcon.icon}
      </IconContext.Provider>
    </Stack>
  );
};

export default TechIcon;
