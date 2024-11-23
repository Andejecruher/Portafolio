import { Grid, Container, SimpleGrid, Button, Text, Card, Image, Group, Badge, Pagination, Skeleton, Divider } from '@mantine/core';
import { TagsList } from '@src/components/TagsList/TagsList';
import { useBlog } from '@src/context/useBlog';
import { useNavigate } from 'react-router-dom';

import classes from './Posts.module.css';

export function PostsSkeleton() {
  return (
    <section id='posts' className={classes.posts}>
      <Container size='md'>
        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} >
              {[1, 2, 3, 4].map((index) => (
                <Card withBorder className="card-content" key={index}>
                  <Card.Section className="card-image-section">
                    <Skeleton height={180} />
                  </Card.Section>
                  <Group justify="flex-start" className="card-tecnology">
                    <Skeleton height={20} width={60} />
                    <Skeleton height={20} width={60} />
                    <Skeleton height={20} width={60} />
                  </Group>
                  <div className="card-content">
                    <Skeleton height={30} width="80%" mb="sm" />
                    <Skeleton height={20} width="90%" mb="sm" />
                    <Skeleton height={20} width="90%" mb="sm" />
                  </div>
                  <SimpleGrid cols={2} className='card-buttons'>
                    <Skeleton height={36} width="100%" />
                  </SimpleGrid>
                </Card>
              ))}
            </SimpleGrid>
            <Group mt={30} mb={30} align="center" justify='center'>
              <Skeleton height={8} mt={6} mb={10} />
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" withBorder style={{ padding: '20px' }}>
              <Skeleton height={8} mb='md' />
              <Divider mb="sm" style={{ marginBottom: '16px', borderColor: '#ddd' }} />
              <Group spacing="xs" wrap="wrap" style={{ justifyContent: 'center' }}>
                <Skeleton height={8} />
                <Skeleton height={8} mt={6} />
                <Skeleton height={8} mt={6} />
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}


export function Posts() {
  const { articles, tags, search, tag, category, pagination, loadingStatus, setTag, setSearch, setArticle, setCategory, fetchArticles } = useBlog();
  const { articles: articlesLoading } = loadingStatus;
  const { total_pages, current_page } = pagination;
  const navigate = useNavigate();

  if (articlesLoading) {
    return <PostsSkeleton />;
  }

  const renderPosts = () => {
    return articles.map((article, index) => (
      <Card withBorder key={index} className={`card-content ${article.thumbnail ? "" : "card-small"}`}>
        {article.thumbnail && (
          <Card.Section className="card-image-section">
            <Image
              src={article.featured_image}
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
            onClick={() => handleGetArticle(article)}
          >
            {`ver más -->`}
          </Button>
        </SimpleGrid>
      </Card>
    ));
  }

  const handleGetArticle = (article) => {
    setArticle(article);
    const slug = article.title.toLowerCase().replace(/ /g, '-');
    navigate(`/blog/${slug}`);
  }

  const handleTag = (tag) => {
    setSearch('');
    setCategory('Todas');
    setTag(tag);
    if (tag) {
      const query = `?tag=${tag.id}`;
      fetchArticles(query);
    }
  }

  const handlePageChange = (page) => {
    if (page === current_page) return;
    let query = `?page=${page}`;
    if (category && category !== 'Todas') {
      query = `?category=${category.id}&page=${page}`;
    }
    if (tag) {
      query += `&tag=${tag.id}`;
    }
    if (search) {
      query += `&search=${search}`;
    }
    fetchArticles(query);
  };

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

          {category && category !== 'Todas' && (
            <Grid.Col span={12}>
              <Text align="left" style={{ marginBottom: 20 }}>
                Categoría: {category}
              </Text>
            </Grid.Col>
          )}

          {tag && (
            <Grid.Col span={12}>
              <Text align="left" style={{ marginBottom: 20 }}>
                Tag: {tag.name}
              </Text>
            </Grid.Col>
          )}
          <Grid.Col span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="xs" verticalSpacing="xs">
              {renderPosts()}
            </SimpleGrid>
            <Group mt={30} align="center" justify='center'>
              <Pagination
                total={total_pages}
                value={current_page}
                onChange={handlePageChange}
              />
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TagsList tags={tags} handleTag={handleTag} />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}

