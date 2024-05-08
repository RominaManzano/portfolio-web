import Navbar from "@/components/organisms/Navbar";
import About from "@/components/templates/About";
import Experience from "@/components/templates/Experience";
import Skills from "@/components/templates/Skills";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
        <Navbar />
        <Stack
          direction="column"
          gap={8}
          justifyContent="center"
          width={{ base: "full", lg: "60%" }}
          padding={{ base: 4, md: 8 }}
          marginTop={20}
        >
          <About />
          <Experience />
          <Skills />
        </Stack>

        <footer className="h-10 w-full  my-6">
          <p className="text-center">©{year} Romina Manzano</p>
        </footer>
      </main>
    </>
  );
}
