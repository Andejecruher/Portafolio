import { Center } from '@mantine/core';
import { Loader } from '@src/components/Loader/Loader';
import { useLoading } from '@src/context/useLoading';

export function PageLoader() {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <Center style={{ height: '100vh' }}>
      <Loader />
    </Center>
  );
}