import { useState } from 'react';
import { Button, Image, Text, TextInput, Title, Container } from '@mantine/core';
import image from '@src/assets/bgEmailBanner.svg';
import { IconCheck, IconX } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useBlog } from '@src/context/useBlog';
import classes from './EmailBanner.module.css';

export function EmailBanner() {
  const { fetchRegisterNewsletter } = useBlog();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (!email) {
      notifications.show({
        title: '¡Ups! Algo salió mal',
        message: 'Por favor, ingresa tu correo electrónico.',
        color: 'red',
        position: 'top-right',
        icon: <IconX />,
        autoClose: 5000,
      });
      setIsLoading(false);
      return;
    }
    try {
      await fetchRegisterNewsletter({ email });
      notifications.show({
        title: '¡Gracias por suscribirte!',
        message: 'Te has suscrito correctamente a nuestro boletín.',
        color: 'green',
        position: 'top-right',
        icon: <IconCheck />,
        autoClose: 5000,
      });
      setEmail('');
      setIsLoading(false);
    } catch (error) {
      notifications.show({
        title: 'Error al suscribirte',
        message: 'Ha ocurrido un error al suscribirte a nuestro boletín. Por favor, inténtalo de nuevo.',
        color: 'red',
        position: 'top-right',
        icon: <IconX />,
        autoClose: 5000,
      });
      console.error(error);
      setIsLoading(false);
    }
  };
  return (
    <section id="email-banner">
      <Container size="md">
        <div className={classes.wrapper}>
          <div className={classes.body}>
            <Title className={classes.title}>Espera un momento ...</Title>
            <Text mb={5} className={classes.subtitle}>
              Subscribete a nuestro boletín
            </Text>
            <Text className={classes.text}>
              Recibe las últimas noticias y actualizaciones
            </Text>

            <div className={classes.controls}>
              <TextInput
                placeholder="Ingresa tu correo electrónico"
                classNames={{ input: classes.input, root: classes.inputWrapper }}
                value={email}
                onChange={handleEmailChange}
              />
              <Button color="initial" className={classes.control} onClick={handleSubmit} loading={isLoading}>Subscribete</Button>
            </div>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </section>
  );
}