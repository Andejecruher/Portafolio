import { Image, Container, Title, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import image from '@src/assets/andejecruher.png';
import dots from '@src/assets/dots.svg';
import vector from '@src/assets/vector.svg';

import classes from './Hero.module.css';

export function Hero() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  }
  return (
    <section id="hero">
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Soy Andejecruher <br /> <span className={classes.highlight}>Desarrollador Full Stack</span>
            </Title>
            <Text className={classes.text}>
              Mi pasión por el desarrollo abarca tanto el frontend como el backend. Disfruto diseñando interfaces de usuario intuitivas y atractivas, así como construyendo sistemas robustos y escalables. Cada proyecto es una oportunidad para aprender algo nuevo y superar desafíos técnicos.
            </Text>
            <Button
              color="initial"
              variant="outline"
              className={classes.button}
              onClick={() => handleContact()}
            >
              ¡Contáctame!
            </Button>
          </div>
          <div className={classes.contentImages} >
            <Image src={vector} className={classes.vector} />
            <Image src={image} className={classes.image} />
            <div className={classes.actualities}>
              <span className={classes.cube} ></span>
              <div className={classes.actualitiesText}>
                Actualmente trabajando en<span> Portafolio</span>
              </div>
            </div>
            <Image src={dots} className={classes.dots} />
          </div>
        </div>
      </Container>
    </section>
  );
}