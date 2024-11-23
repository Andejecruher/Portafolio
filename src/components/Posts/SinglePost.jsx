import { useBlog } from '@src/context/useBlog';
import {
  Title,
  Text,
  Image,
  Group,
  Badge,
  Divider,
  Box,
  Pagination,
  Paper,
  Stack,
  Container,
} from '@mantine/core';
import { FormComments } from '@src/components/FormComments/FormComments';

import classes from './SinglePost.module.css';

export function SinglePost() {
  const { article, fetchArticleById } = useBlog();
  const { title, description, content, featured_image, publication_date, category, user, comments, tags } = article;
  const { current_page, last_page: total_pages } = comments;
  console.log(comments);

  const handlePageChange = (pageSelect) => {
    let query = `${article.id}?page=${pageSelect}`;
    fetchArticleById(query);
  };

  return (
    <section id="single-post" className={classes.single_post}>
      <Container size="md">
        <Paper shadow="sm" p="md" radius="md" withBorder>
          {/* Title & Description */}
          <Title order={1} size="h1" mb="sm" className={classes.title}>{title}</Title>
          <Text mb="lg" className={classes.description}>{description}</Text>

          {/* Featured Image */}
          {featured_image && (
            <Image src={featured_image} alt="Featured" height={400} radius="md" mb="lg" className={classes.image} />
          )}

          {/* Publication Details */}
          <Group position="apart" align="center" mb="md">
            <Stack gap="xs">
              <Text className={classes.text}>
                <strong>Publicado por:</strong> {user.first_name} {user.last_name}
              </Text>
              <Text className={classes.text}>
                <strong>Fecha:</strong> {new Date(publication_date).toLocaleDateString()}
              </Text>
              <Text className={classes.text}>
                <strong>Categoría:</strong> {category.name}
              </Text>
            </Stack>
          </Group>

          {/* Tags Section */}
          {tags && (
            <Box mb="lg">
              <Title order={3} size="h3" mb="xs" className={classes.text}>Tags</Title>
              <Group spacing="xs">
                {tags.map((tag, index) => (
                  <Badge key={index} color="cyan" variant="filled" className={classes.tag} style={{
                    backgroundColor: tag.color, color: tag.color === '#ffffff' ? '#000000' : '#ffffff',
                    borderRadius: '0px',
                    border: '1px solid #C778DD',
                  }}>
                    {tag.name}
                  </Badge>
                ))}
              </Group>
            </Box>
          )}

          {/* Article Content */}
          <Divider mb="lg" />
          <Box className={classes.dangerousHtml} dangerouslySetInnerHTML={{ __html: content }} mb="lg" />

          {/* Comments Section */}
          <Box mt="lg">
            <Title order={2} size="h2" mb="sm" className={classes.text}>Comentarios</Title>
            {comments.data.length > 0 ? (
              <Stack spacing="sm">
                {comments.data.map((comment, index) => (
                  <Paper key={index} p="md" shadow="xs" radius="sm" withBorder>
                    <Text weight={500}>{comment.author_name}</Text>
                    <Text size="xs">{new Date(comment.published_at).toLocaleDateString()}</Text>
                    <Text mt="sm">{comment.content}</Text>
                  </Paper>
                ))}
              </Stack>
            ) : (
              <Text className={classes.description}>No hay comentarios aún.</Text>
            )}
          </Box>

          {/* Pagination */}
          {comments && comments.data.length > 0 && (
            <Group mt={30} align="center" justify='center'>
              <Pagination
                total={total_pages}
                value={current_page}
                onChange={handlePageChange}
              />
            </Group>
          )}

          {/* Comments Form */}
          <Divider mt="lg" mb="md" />
          <FormComments />
        </Paper>
      </Container>
    </section>
  );
};
