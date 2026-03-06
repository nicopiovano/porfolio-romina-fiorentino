import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import profileImageSrc from "../../public/romi-fiorentino.png";

export default function App() {
  const profileImage = profileImageSrc;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero profileImage={profileImage} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
