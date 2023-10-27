import HomePage from "@/components/home/homePage";
import AboutPage from "@/components/about/page";
import ProjectPage from "@/components/project/page";
import ContactPage from "@/components/contact/page";
import NavBar from "@/components/nav-bar/navBar";
import FooterPage from "@/components/footer/page";

export default function Home() {
  return (
    <main id="cover">
      <NavBar></NavBar>
      <HomePage></HomePage>
      <AboutPage></AboutPage>
      <ProjectPage></ProjectPage>
      <ContactPage></ContactPage>
      <FooterPage></FooterPage>
    </main>
  );
}
