import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/page";
import ProjectPage from "@/components/project/page";
export default function Home() {
  return (
    <main className="bg-[#393A47] h-screen w-full">
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ProjectPage></ProjectPage>
    </main>
  );
}
