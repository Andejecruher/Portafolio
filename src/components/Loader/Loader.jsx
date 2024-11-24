import { Box, Image, Center, Loader as MantineLoader, useMantineTheme } from '@mantine/core';
import ajh from '@src/assets/ajh.png'; // Puedes reemplazar con la imagen que desees

export function Loader() {
  const theme = useMantineTheme();
  return (
    <Center style={{ minHeight: '100vh', flexDirection: 'column' }}>
      {/* Imagen del Loader */}
      <Image src={ajh} alt="Andejecruher" mb="md" style={
        {
          width: '200px',
          height: '200px',
        }
      } />

      {/* Dots en movimiento (Loader de Mantine) */}
      <Box>
        <MantineLoader type="dots" color={theme.colorScheme === 'dark' ? 'gray' : 'white'} size="xl" />
      </Box>
    </Center>
  );
};
