"use client";

import { Stack } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import {
  RiAngularjsFill,
  RiBootstrapFill,
  RiGatsbyFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGithub,
  SiJest,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

interface TechIconMap {
  [key: string]: {
    icon: JSX.Element;
    color: string;
  };
}

export const technologiesIconMap: TechIconMap = {
  "react-js": {
    icon: <RiReactjsFill />,
    color: "#58c4dc",
  },
  "next-js": {
    icon: <RiNextjsFill />,
    color: "black",
  },
  "angular-js": {
    icon: <RiAngularjsFill />,
    color: "#dd1b16",
  },
  "vite-js": {
    icon: <SiVite />,
    color: "#646cff",
  },
  "gatsby-js": {
    icon: <RiGatsbyFill />,
    color: "#663399",
  },
  "node-js": {
    icon: <RiNodejsFill />,
    color: "#417e37",
  },
  "express-js": {
    icon: <SiExpress />,
    color: "black",
  },
  css: {
    icon: <SiCss3 />,
    color: "#2965f1",
  },
  "styled-components": {
    icon: <SiStyledcomponents />,
    color: "#db7093",
  },
  "chakra-ui": {
    icon: <SiChakraui />,
    color: "#3ac7bb",
  },
  bootstrap: {
    icon: <RiBootstrapFill />,
    color: "#6f42c1",
  },
  tailwindcss: {
    icon: <SiTailwindcss />,
    color: "#36b9cc",
  },
  storybook: {
    icon: <SiStorybook />,
    color: "#ff4785",
  },
  javascript: {
    icon: <RiJavascriptFill />,
    color: "#f7ca18",
  },
  typescript: {
    icon: <BiLogoTypescript />,
    color: "#2e79c7",
  },
  mysql: {
    icon: <SiMysql />,
    color: "#00758f",
  },
  mongodb: {
    icon: <SiMongodb />,
    color: "#47a248",
  },
  postgresql: {
    icon: <SiPostgresql />,
    color: "#336791",
  },
  jest: {
    icon: <SiJest />,
    color: "#c20303",
  },
  github: {
    icon: <SiGithub />,
    color: "black",
  },
};

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
