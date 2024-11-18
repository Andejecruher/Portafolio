import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container, Image } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import dots from '@src/assets/dots.svg';

import classes from './GetInTouch.module.css';

export function GetInTouch() {
  return (
    <section id="contact" className={classes.contact}>
      <Image src={dots} alt="dots" className={classes.dotsTopList} />
      <Container size="md">
        <Paper>
          <div className={classes.wrapper}>
            <div className={classes.contacts} style={{ backgroundImage: `transparent` }}>
              <Text className={classes.title}>
                <span className='almohadilla'>#</span>Informacion
              </Text>

              <ContactIconsList />
            </div>

            <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
              <Text className={classes.title}>
                <span className='almohadilla'>#</span>Formulario de contacto
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput label="Tu nombre" placeholder="Tu nombre" />
                  <TextInput label="Tu correo" placeholder="example@gmail.com" required />
                </SimpleGrid>

                <TextInput mt="md" label="Asunto" placeholder="Asunto" required />

                <Textarea
                  mt="md"
                  label="Tu mensaje"
                  placeholder="Por favor, escribe tu mensaje aquí"
                  minRows={3}
                />

                <Group justify="flex-end" mt="md">
                  <Button className={classes.control} variant='outlined' color="initial">
                    Enviar mensaje
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Container>
      <div className={classes.cubeBottomListP} />
    </section>
  );
}