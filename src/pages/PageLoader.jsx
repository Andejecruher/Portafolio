import { Center } from '@mantine/core';
import { Loader } from '@src/components/Loader/Loader';

export function PageLoader() {

  return (
    <Center style={{ height: '100vh' }}>
      <Loader />
    </Center>
  );
}