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
    title: string;
  };
}

export const technologiesIconMap: TechIconMap = {
  "react-js": {
    icon: <RiReactjsFill />,
    color: "#58c4dc",
    title: "ReactJS",
  },
  "next-js": {
    icon: <RiNextjsFill />,
    color: "black",
    title: "NextJS",
  },
  "angular-js": {
    icon: <RiAngularjsFill />,
    color: "#dd1b16",
    title: "AngularJS",
  },
  "vite-js": {
    icon: <SiVite />,
    color: "#646cff",
    title: "Vite",
  },
  "gatsby-js": {
    icon: <RiGatsbyFill />,
    color: "#663399",
    title: "Gatsby",
  },
  "node-js": {
    icon: <RiNodejsFill />,
    color: "#417e37",
    title: "NodeJS",
  },
  "express-js": {
    icon: <SiExpress />,
    color: "black",
    title: "ExpressJS",
  },
  css: {
    icon: <SiCss3 />,
    color: "#2965f1",
    title: "CSS",
  },
  "styled-components": {
    icon: <SiStyledcomponents />,
    color: "#db7093",
    title: "Styled Components",
  },
  "chakra-ui": {
    icon: <SiChakraui />,
    color: "#3ac7bb",
    title: "Chakra UI",
  },
  bootstrap: {
    icon: <RiBootstrapFill />,
    color: "#6f42c1",
    title: "Bootstrap",
  },
  tailwindcss: {
    icon: <SiTailwindcss />,
    color: "#36b9cc",
    title: "TailwindCSS",
  },
  storybook: {
    icon: <SiStorybook />,
    color: "#ff4785",
    title: "Storybook",
  },
  javascript: {
    icon: <RiJavascriptFill />,
    color: "#f7ca18",
    title: "JavaScript",
  },
  typescript: {
    icon: <BiLogoTypescript />,
    color: "#2e79c7",
    title: "TypeScript",
  },
  mysql: {
    icon: <SiMysql />,
    color: "#00758f",
    title: "MySQL",
  },
  mongodb: {
    icon: <SiMongodb />,
    color: "#47a248",
    title: "MongoDB",
  },
  postgresql: {
    icon: <SiPostgresql />,
    color: "#336791",
    title: "PostgreSQL",
  },
  jest: {
    icon: <SiJest />,
    color: "#c20303",
    title: "Jest",
  },
  github: {
    icon: <SiGithub />,
    color: "black",
    title: "GitHub",
  },
};
