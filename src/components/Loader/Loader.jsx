import { Box, Image, Center, Loader as MantineLoader } from '@mantine/core';
import ajh from '@src/assets/ajh.png'; // Puedes reemplazar con la imagen que desees

const Loader = () => {
  return (
    <Center style={{ minHeight: '100vh', flexDirection: 'column' }}>
      {/* Imagen del Loader */}
      <Image src={ajh} alt="Cargando..." width={128} height={128} mb="md" />

      {/* Dots en movimiento (Loader de Mantine) */}
      <Box>
        <MantineLoader variant="dots" color="dark" size="md" />
      </Box>
    </Center>
  );
};

export default Loader;
