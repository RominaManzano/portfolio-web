import Navbar from "@/components/organisms/Navbar";
import About from "@/components/templates/About";
import Experience from "@/components/templates/Experience";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
        <Stack
          direction="column"
          gap={8}
          justifyContent="center"
          width={{ base: "full", lg: "60%" }}
          padding={{ base: 4, md: 8 }}
          paddingTop={{ base: 20, md: 24 }}
        >
          <About />
          <Experience />
        </Stack>
      </main>
    </>
  );
}
