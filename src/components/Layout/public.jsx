import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import { HeaderMenu } from '@src/components/Header/HeaderMenu';
import { Footer } from '@src/components/Footer/Footer';

function Public() {


  return (
    <>
      <Container size="md">
        <HeaderMenu />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default Public;