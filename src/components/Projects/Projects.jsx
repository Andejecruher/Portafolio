import { Container, Group, Text, Card, Image, Button, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Projects.module.css';
import dots from '@src/assets/dots.svg';
import PropTypes from 'prop-types';

export function Projects({ projects, title, line, link }) {

  const renderProjects = () => {
    return projects.map((project, index) => (
      <Card withBorder key={index} className={`card-content ${project.image ? "" : "card-small"}`}>
        {project.image && (
          <Card.Section className="card-image-section">
            <Image
              src={project.image}
              alt={project.title}
              className="card-image"
            />
          </Card.Section>
        )}


        <Group justify="flex-start" className={`card-tecnology ${project.image ? "" : "card-small-tecnology"}`}>
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
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>{title}</Text>
          {line && <div className={classes.line} />}
          {link && <Link align="center" size="xl" className={classes.open} to={link}>Ver todos {'-->'}</Link>}
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
          {renderProjects()}
        </SimpleGrid>
        <div alt="cube" className={classes.cube} />
      </Container>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  line: PropTypes.bool,
  link: PropTypes.string,
};