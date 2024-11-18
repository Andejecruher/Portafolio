import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import image from '@src/assets/404.svg';
import classes from './NotFound.module.css';

export default function NotFoundPage() {
  const [counter, setCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
        <Image src={image} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Algo no está bien...</Title>
          <Text size="lg" className={classes.text}>
            La página que estás intentando abrir no existe. Es posible que haya escrito mal la dirección o que la página se haya movido a otra URL.
            Si cree que se trata de un error, comuníquese con el soporte.
          </Text>
          <Text size="lg" mt="md" className={classes.text}>
            Serás redirigido automáticamente a la página de inicio en {counter} segundos ...
          </Text>
          <Button variant="default" color="indigo" size="md" radius="md" mt="md" className={classes.control} onClick={(e) => {
            e.preventDefault();
            navigate('/home');
          }}>Volver a la página de inicio</Button>
        </div>
        <Image src={image} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
}