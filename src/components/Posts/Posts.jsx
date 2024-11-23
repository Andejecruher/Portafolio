import { Grid, Container, SimpleGrid, Button, Text, Card, Image, Group, Badge } from '@mantine/core';
import { TagsList } from '@src/components/TagsList/TagsList';
import { useBlog } from '@src/context/useBlog';

import classes from './Posts.module.css';

export function Posts() {
  const { articles, tags, loadingStatus, setTag, search } = useBlog();
  const { articles: articlesLoading } = loadingStatus;

  if (articlesLoading) {
    return <div>Loading...</div>;
  }

  const renderPosts = () => {
    return articles.map((article, index) => (
      <Card withBorder key={index} className={`card-content ${article.thumbnail ? "" : "card-small"}`}>
        {article.thumbnail && (
          <Card.Section className="card-image-section">
            <Image
              src={article.thumbnail}
              alt={article.title}
              className="card-image-post"
            />
          </Card.Section>
        )}
        <Group justify="flex-start" className={`card-tecnology ${article.image ? "" : "card-small-tecnology"}`}>
          {article.tags.map((tag, index) => (
            <Badge key={index} style={{
              backgroundColor: tag.color,
              color: tag.color === '#ffffff' ? '#000000' : '#ffffff',
              borderRadius: '0px',
            }} variant="outline">
              {tag.name}
            </Badge>
          ))}
        </Group>
        <div className="card-content">
          <Text className='card-title-post'>
            {article.title}
          </Text>
          <Text className='card-text-post'>
            {article.description}
          </Text>
        </div>
        <SimpleGrid cols={2} className='card-buttons'>
          <Button color="initial" variant="outline" fullWidth
            onClick={() => window.open(article.id, '_blank')}
          >
            {`ver más -->`}
          </Button>
        </SimpleGrid>
      </Card>
    ));
  }

  const handleTag = (tag) => {
    setTag(tag);
  }

  return (
    <section id='posts' className={classes.posts}>
      <Container size='md'>
        <Grid>
          {search && (
            <Grid.Col span={12}>
              <Text align="left" style={{ marginBottom: 20 }}>
                Resultados de la búsqueda: {search}
              </Text>
            </Grid.Col>
          )}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="xs" verticalSpacing="xs">
              {renderPosts()}
            </SimpleGrid>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TagsList tags={tags} handleTag={handleTag} />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}