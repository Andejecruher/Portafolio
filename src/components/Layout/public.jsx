import { Outlet } from 'react-router-dom';
import { HeaderMenu } from '@src/components/Header/HeaderMenu';
import { Footer } from '@src/components/Footer/Footer';
import { LinksSociales } from '@src/components/Links/Links';

function Public() {


  return (
    <>
      <LinksSociales />
      <HeaderMenu />
      <main style={{
        marginTop: '61px',
      }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Public;