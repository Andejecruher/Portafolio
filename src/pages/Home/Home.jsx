import { Helmet } from "react-helmet";
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
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Andejecruher - Inicio"
        />
        <meta
          property="og:description"
          content="Explora mi trayectoria como desarrollador full stack, conoce mis proyectos y obtén recursos sobre programación y superación personal."
        />
        <meta
          property="og:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.andejecruher.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Andejecruher - Inicio"
        />
        <meta
          name="twitter:description"
          content="Soy Andejecruher, un desarrollador full stack en constante crecimiento, compartiendo recursos y proyectos sobre programación y superación personal."
        />
        <meta
          name="twitter:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png"
        />
        <meta property="fb:app_id" content="546592754922069" />
        <title>Andejecruher - Inicio</title>
      </Helmet>
      <section id="home">
        <Hero />
        <Phrase text="No trates de convertirte en un hombre de éxito, sino más bien en un hombre de valor" author="- Albert Einstein" />
        <Projects projects={projects} title="Proyectos" line={true} link="/projects" />
        <Skills />
        <AboutMe section={true} />
        <Contact />
        <EmailBanner />
      </section>
    </>
  );
};

export default HomePage;