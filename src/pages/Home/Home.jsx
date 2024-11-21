import { Hero } from '@src/components/Hero/Hero';
import { Phrase } from '@src/components/Phrase/Phrase';
import { Projects } from '@src/components/Projects/Projects';
import { Skills } from '@src/components/Skills/Skills';
import { AboutMe } from '@src/components/AboutMe/AboutMe';
import { Contact } from '@src/components/Contact/Contact';
import { EmailBanner } from '@src/components/EmailBanner/EmailBanner';
import andejecruher from '@src/assets/projects/andejecruher.png';
import volveravivir from '@src/assets/projects/volveravivir.png';
import invitaciones from '@src/assets/projects/invitaciones.png';

const HomePage = () => {

  const projects = [
    {
      title: 'Invitaciones digitales',
      text: 'Crea invitaciones digitales elegantes y personalizadas para bodas y eventos.',
      image: invitaciones,
      tecnologies: 'HTML CSS JS VUEJS MUI',
      github: 'https://github.com/Andejecruher/invite',
    },
    {
      title: 'Volver a vivir libre',
      text: 'Página web para una clínica de rehabilitación con enfoque en bienestar y recuperación.',
      image: volveravivir,
      tecnologies: 'HTML CSS JS BOOTSTRAP',
      link: 'https://volveravivirlibre.com/',
    },
    {
      title: 'Andejecruher',
      text: 'Web personal para compartir mi CV, proyectos y contenido sobre tecnología.',
      image: andejecruher,
      tecnologies: 'HTML CSS JS VUEJS MUI',
      link: 'https://build.andejecruher.com/inicio',
      github: 'https://github.com/Andejecruher/Andejecruher',
    },
  ];
  return (
    <section id="home">
      <Hero />
      <Phrase text="No trates de convertirte en un hombre de éxito, sino más bien en un hombre de valor" author="- Albert Einstein" />
      <Projects projects={projects} title="Proyectos" line={true} link="/projects" />
      <Skills />
      <AboutMe section={true} />
      <Contact />
      <EmailBanner />
    </section>
  );
};

export default HomePage;