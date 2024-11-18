import { Container, Group, SimpleGrid, Text, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import dots from '@src/assets/dots.svg';
import discord from '@src/assets/Discord.svg';
import correo from '@src/assets/Email.svg';

import classes from './Contact.module.css';

export function Contact() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact');
  }

  return (
    <section id="contact" className={classes.contact}>
      <Image src={dots} className={classes.dots} />
      <Container size="md" justify="center" align='center' mt="lg">
        <Group justify="space-between" align='center' mb="lg">
          <Text align="center" size="xl" className={classes.title}><span className='almohadilla'>#</span>Contacto</Text>
          <div className={classes.line} />
        </Group>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 2, md: 2 }} spacing="lg">
          <div className={classes.contactInfo}>
            <Text align="left" size="lg" className={classes.contactText}>Estoy interesado en oportunidades de freelance. Sin embargo, si tiene otra solicitud o pregunta, no dude en ponerse en contacto conmigo.</Text>
            <Group mt='md' justify='flex-start'>
              <Button
                color="initial"
                variant="outline"
                className={classes.button}
                onClick={() => handleContact()}
              >
                ¡Contáctame!
              </Button>
            </Group>
          </div>
          <div className={classes.contactItems}>
            <Group justify="flex-end" gap="xs">
              <div className={classes.box}>
                <Text align="left" size="xl" className={classes.contactTitle}>Detalles de contacto</Text>
                <Text align="left" size="lg" className={classes.text}>
                  <Image src={discord} className={classes.contactIcon} />
                  <a href='https://discord.com/users/@Andejecruher' target="_blank" className={classes.contactItemValue}>@Andejecruher</a>
                </Text>
                <Text align="left" size="lg" className={classes.text}>
                  <Image src={correo} className={classes.contactIcon} />
                  <a href="mailto:andejecruher@gmail.com" className={classes.contactItemValue}>andejecruher@gmail.com</a>
                </Text>
              </div>
            </Group>
          </div>
        </SimpleGrid>
      </Container>
    </section>
  );
};
