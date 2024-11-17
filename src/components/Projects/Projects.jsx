import { Container, Group, Text, Card, Image, Button, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';
import andejecruher from '@src/assets/projects/andejecruher.png';
import volveravivir from '@src/assets/projects/volveravivir.png';
import invitaciones from '@src/assets/projects/invitaciones.png';
import dots from '@src/assets/dots.svg';

export function Projects() {
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

  const renderProjects = () => {
    return projects.map((project, index) => (
      <Card withBorder key={index} className="card-content">
        <Card.Section className="card-image-section">
          <Image
            src={project.image}
            alt={project.title}
            className="card-image"
          />
        </Card.Section>

        <Group justify="flex-start" className='card-tecnology'>
          <Text>
            {project.tecnologies}
          </Text>
        </Group>
        <div className="card-content">
          <Text className='card-title'>
            {project.title}
          </Text>
          <Text className='card-text'>
            {project.text}
          </Text>
        </div>
        <SimpleGrid cols={2} className='card-buttons'>
          {project.link && (
            <Button color="initial" variant="outline" fullWidth
              onClick={() => window.open(project.link, '_blank')}
            >
              {`ver -->`}
            </Button>
          )}
          {project.github && (
            <Button color="initial" variant="outline" fullWidth
              onClick={() => window.open(project.github, '_blank')}
            >
              {`GitHub -->`}
            </Button>
          )}
        </SimpleGrid>
      </Card>
    ));
  }


  return (
    <section id="projects" className={classes.projects}>
      <Image src={dots} alt="dots" className={classes.dots} />
      <Container size="md" justify="center" align='center' gap='sm'>
        <Group justify="space-between" align='center' mb="lg">
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Proyectos</Text>
          <div className={classes.line} />
          <Link align="center" size="xl" className={classes.open}>Ver todos {'-->'}</Link>
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {renderProjects()}
        </SimpleGrid>
        <div alt="cube" className={classes.cube} />
      </Container>
    </section>
  );
};
