import { useState } from 'react';
import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useBlog } from '@src/context/useBlog';
import { notifications } from '@mantine/notifications';

import classes from './FormComments.module.css';

export function FormComments() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      comment: (value) => value.trim().length === 0,
    },
  });
  const { fetchCreateComment, article } = useBlog();

  const handleSubmit = () => {
    setLoading(true);
    const data = {
      article_id: article.id,
      author_name: form.values.name,
      author_email: form.values.email,
      content: form.values.comment,
    };
    fetchCreateComment(data);
    notifications.show({
      title: `Comentario enviado`,
      message: `Gracias por tu comentario, será revisado por un moderador antes de ser publicado`,
      position: 'top-right',
      icon: <IconCheck />,
      className: 'my-notification-class',
      autoClose: 5000,
    });
    form.initialize({ name: '', email: '', comment: '' });
    form.reset();
    setLoading(false);
  };

  return (

    <>
      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <Title
          order={2}
          size="h1"
          fw={900}
          ta="center"
          className={classes.title}
        >
          Deja tu comentario
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
          <TextInput
            label="Nombre"
            placeholder="escribe tu nombre"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
            className={classes.input}
          />
          <TextInput
            label="Correo electronico"
            placeholder="example@gmail.com"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
            className={classes.input}
          />
        </SimpleGrid>

        <Textarea
          mt="md"
          label="Comentario"
          placeholder="Deja tu comentario aquí"
          maxRows={10}
          minRows={5}
          autosize
          name="comment"
          variant="filled"
          {...form.getInputProps('comment')}
          className={classes.input}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" disabled={loading}>
            {'Enviar comentario'}
          </Button>
        </Group>
      </form>
    </>
  );
}