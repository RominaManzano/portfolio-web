import Navbar from "@/components/organisms/Navbar";
import About from "@/components/templates/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <About />
      </main>
    </>
  );
}
