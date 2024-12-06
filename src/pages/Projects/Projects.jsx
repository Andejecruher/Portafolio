import { Helmet } from "react-helmet-async";
import { Breadcrumbs } from "@src/components/Breadcrumbs/Breadcrumbs";
import { Projects } from '@src/components/Projects/Projects';
import andejecruher from '@src/assets/projects/andejecruher.png';
import volveravivir from '@src/assets/projects/volveravivir.png';
import invitaciones from '@src/assets/projects/invitaciones.png';
import portafolio from '@src/assets/projects/portafolio.png';

const ProjectsPage = () => {
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
    {
      title: 'Portafolio Digital',
      text: 'Portafolio personal para compartir mis proyectos y contenido sobre tecnología.',
      image: portafolio,
      tecnologies: 'HTML CSS JS REACT MANTINE',
      link: 'https://andejecruher.com/',
      github: 'https://github.com/Andejecruher/Portafolio'
    }
  ];

  const projectsSmall = [
    {
      title: 'Todo List',
      text: 'Frontend para la aplicación de Todo list de tareas.',
      tecnologies: 'HTML CSS JS NEXTJS TAILWINDCSS',
      github: 'https://github.com/Andejecruher/CodeGame/tree/main/Frontend',
    },
    {
      title: 'API Todo List',
      text: 'Api para Todo list de tareas y control de usuarios.',
      tecnologies: 'PYTHON FLASK FLASK-JWT-EXTENDED FLASK-SQLALCHEMY MARIA-DB',
      github: 'https://github.com/Andejecruher/CodeGame/tree/main/backend',
    },
    {
      title: 'API Node.js con Sequelize',
      text: 'Este proyecto es una API RESTful construida con Node.js, Express y Sequelize.',
      tecnologies: 'NODE.JS EXPRESS SEQUELIZE POSTGRESQL',
      github: 'https://github.com/Andejecruher/blog-code-examples/tree/main/NodeJs/api-nodejs-sequelize',
    },
    {
      title: 'Minimal Blog Card',
      text: 'Card minimalista para mostrar contenido de un blog.',
      tecnologies: 'HTML CSS JS',
      github: 'https://github.com/Andejecruher/Challengs/tree/main/CardVintage'
    }
  ];
  return (
    <>
      <Helmet>
        <meta
          property="og:title"
          content="Andejecruher - Proyectos" />
        <meta
          property="og:description"
          content="Explora mi trayectoria como desarrollador full stack, conoce mis proyectos y obtén recursos sobre programación y superación personal." />
        <meta
          property="og:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.andejecruher.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Andejecruher - Proyectos" />
        <meta
          name="twitter:description"
          content="Soy Andejecruher, un desarrollador full stack en constante crecimiento, compartiendo recursos y proyectos sobre programación y superación personal." />
        <meta
          name="twitter:image"
          content="https://backend.andejecruher.com/api/images/portafolio-DkIC-C5t.png" />
        <meta property="fb:app_id" content="546592754922069" />
        <title>Andejecruher - Proyectos</title>
      </Helmet>
      <section id="projects">
        <Breadcrumbs title="Proyectos" description="Proyectos realizados" />
        <Projects projects={projects} title="Completos" />
        <Projects projects={projectsSmall} title="Pequeños" />
      </section>
    </>

  );
};

export default ProjectsPage;