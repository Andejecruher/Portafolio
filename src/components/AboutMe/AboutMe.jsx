import { Container, Group, SimpleGrid, Text, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import dots from '@src/assets/dots.svg';
import avatar from '@src/assets/avatar.png';
import PropTypes from 'prop-types';

import classes from './AboutMe.module.css';

export function AboutMe({ section }) {
  const navigate = useNavigate();

  const handleAboutMe = () => {
    navigate('/about');
  }
  return (
    <section id="about-me" className={classes.AboutMe}>
      <div className={classes.cube} />
      <Container size="md" justify="center" align='center' mt="lg">
        {section && (
          <Group justify="space-between" align='center' mb="lg">
            <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Sobre Mi</Text>
            <div className={classes.line} />
          </Group>
        )}
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 2 }} spacing="lg">
          <div>
            <Text align="left" size="lg" mb="md" className={classes.subtitle}>Hola, soy Andejecruher !</Text>
            <Text align="justify" size="md" mb="md" className={classes.text}>
              un desarrollador Full Stack apasionado por la tecnología. Me encanta aprender y crecer constantemente en el campo del desarrollo web y las tecnologías emergentes.
            </Text>
            <Text align="justify" size="md" className={classes.text}>
              Siempre busco compartir mis conocimientos y experiencias con otros. Estoy enfocado en crear aplicaciones web eficientes y efectivas, y en mejorar mis habilidades en programación.
            </Text>
            {section && (
              <Group mt="md" justify='flex-start'>
                <Button
                  variant="light"
                  color="initial"
                  className={classes.button}
                  onClick={() => handleAboutMe()}
                >
                  {`Saber más -->`}
                </Button>
              </Group>
            )}

          </div>
          <div className={classes.avatarContent}>
            <div className={classes.avatarImage}>
              <Image src={dots} className={classes.dotsTop} />
              <Image src={avatar} alt="Avatar" className={classes.avatarImg} />
              <Image src={dots} className={classes.dotsBottom} />
            </div>
          </div>
        </SimpleGrid>
      </Container>
      <Image src={dots} className={classes.dots} />
    </section>
  );
};

AboutMe.propTypes = {
  section: PropTypes.bool,
};