import { useState } from 'react';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid, Container, Image } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconX, IconCheck } from '@tabler/icons-react';
import { sendEmailConfirmation, sendEmailContact } from '@src/services/emailService';;
import { ContactIconsList } from './ContactIcons';
import dots from '@src/assets/dots.svg';

import classes from './GetInTouch.module.css';


export function GetInTouch() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Validaciones
    if (!formData.name || !formData.email || !formData.message) {
      notifications.show({
        title: 'Error',
        message: 'Todos los campos son obligatorios',
        color: 'red',
        position: 'top-right',
        icon: <IconX />,
        classNames: classes,
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      notifications.show({
        title: 'Error',
        message: 'Correo electrónico no válido',
        color: 'red',
        position: 'top-right',
        icon: <IconX />,
        classNames: classes,
      });
      return;
    }

    try {
      // Simulación de envío de mensaje
      await sendEmailContact(formData);
      await sendEmailConfirmation(formData);

      notifications.show({
        title: 'Éxito',
        message: 'El correo fue enviado correctamente',
        color: 'teal',
        position: 'top-right',
        icon: <IconCheck />,
        classNames: classes,
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsLoading(false);
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Hubo un problema al enviar el correo',
        color: 'red',
        position: 'top-right',
        icon: <IconX />,
        classNames: classes,
      });
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <section id="contact" className={classes.contact}>
      <Image src={dots} alt="dots" className={classes.dotsTopList} />
      <Container size="md">
        <Paper>
          <div className={classes.wrapper}>
            <div className={classes.contacts} style={{ backgroundImage: `transparent` }}>
              <Text className={classes.titlePage}>
                <span className='almohadilla'>#</span>Informacion
              </Text>

              <ContactIconsList />
            </div>

            <form className={classes.form} onSubmit={handleSubmit}>
              <Text className={classes.titlePage}>
                <span className='almohadilla'>#</span>Formulario de contacto
              </Text>

              <div className={classes.fields}>
                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                  <TextInput
                    label="Tu nombre"
                    placeholder="Tu nombre"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange} />

                  <TextInput
                    label="Tu correo"
                    placeholder="example@gmail.com"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange} />
                </SimpleGrid>

                <TextInput
                  mt="md"
                  label="Asunto"
                  placeholder="Asunto"
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={classes.textarea} />

                <Textarea
                  mt="md"
                  resize="vertical"
                  label="Tu mensaje"
                  placeholder="Por favor, escribe tu mensaje aquí"
                  minRows={6}
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={classes.textarea}
                />

                <Group justify="flex-end" mt="md">
                  <Button type='submit' className={classes.control} variant='outlined' color="initial" loading={isLoading}>
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