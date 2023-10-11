import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/page";
export default function Home() {
  return (
    <main className="bg-[#393A47] h-screen w-full z-13">
      <HomePage></HomePage>
      <AboutPage></AboutPage>
    </main>
  );
}
