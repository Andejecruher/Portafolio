import { Hero } from '@src/components/Hero/Hero';
import { Phrase } from '@src/components/Phrase/Phrase';
import { Projects } from '@src/components/Projects/Projects';
import { Skills } from '@src/components/Skills/Skills';
import { AboutMe } from '@src/components/AboutMe/AboutMe';
import { Contact } from '@src/components/Contact/Contact';
const HomePage = () => {
  return (
    <section id="home">
      <Hero />
      <Phrase text="No trates de convertirte en un hombre de éxito, sino más bien en un hombre de valor" author="- Albert Einstein" />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </section>
  );
};

export default HomePage;